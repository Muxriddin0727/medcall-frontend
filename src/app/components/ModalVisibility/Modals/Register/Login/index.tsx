import { FC } from "react";
import { useRef } from 'react';
import { Button, Form, Input, Divider, InputRef } from "antd";
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import MemberApi from "../../../../../api/memberApi";
import { sweetErrorHandling } from "../../../../../../lib/sweetAlert";
import Avatar from "react-avatar";
import assert from "assert";
import { Definer } from "../../.././../.././../lib/Definer";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});


const Login: FC = (props: any) => {
  const nameRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);



  const handleLoginRequest = async () => {
    console.log(nameRef, passwordRef);
    
    try {
      const mb_name = nameRef.current?.input?.value;
      const mb_password = passwordRef.current?.input?.value;

      const is_fulfilled = mb_name && mb_password;
      assert.ok(is_fulfilled, Definer.input_err1);

      const login_data = {
        mb_name,
        mb_password,
      };

      const memberApiService = new MemberApi();
      await memberApiService.loginRequest(login_data);

    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

 

  return (
    <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
      <Form 
      onFinish={handleLoginRequest}
      className="w-[566px] h-[472px] m-auto">
        <div className="w-[90%] m-auto">
          <h2 className="py-3"> Enter your username and password to login.</h2>
          <Form.Item 
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
          className="pb-3">
            <Input
              className="h-[40px]"
              placeholder="Name"
              ref={nameRef}
            />
          </Form.Item>
          <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password
              // onKeyPress={passwordKeyPressHandler}
              className="h-[40px]"
              placeholder="********"
              suffix={null}
              ref={passwordRef}
            />
          </Form.Item>

          <Button className="flex start-[300px] " type="link">
            Forgot Password?
          </Button>
          <Form.Item>
            <Button
              className=" w-full h-[40px]  mt-4 bg-sky-500/75"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>

          <Form.Item>
          <Avatar name={typeof nameRef.current?.input === 'string' ? nameRef.current?.input : nameRef.current?.input?.value || "User"} size="50" round={true} />
          </Form.Item>
         
          <Divider plain>Or login with</Divider>
          <Form.Item>
            <Button
              className=" w-full h-[40px]  "
              type="default"
              icon={<IconFont type="icon-facebook"></IconFont>}
            >
              Login with Facebook
            </Button>
          </Form.Item>

          <Form.Item>
            <Button
              className=" w-full h-[40px] "
              type="default"
              icon={<GoogleOutlined />}
            >
              Login with Google
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;
