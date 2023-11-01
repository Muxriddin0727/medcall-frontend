import  { FC } from "react";
import { useRef } from 'react';
import assert from "assert";
import { Definer } from "../../.././../.././../lib/Definer";
import { sweetErrorHandling } from "../../../../../../lib/sweetAlert";
import { Button, Form, Input, Divider, InputRef } from "antd";
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import MemberApi from "../../../../../api/memberApi";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Signup: FC = (props: any) => {
  const nameRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const emailRef = useRef<InputRef>(null);

 

  

  const handleSignupRequest = async () => {
    try {
      const mb_name = nameRef.current?.input?.value;
      const mb_password = passwordRef.current?.input?.value;
      const mb_email = emailRef.current?.input?.value;

      const is_fulfilled = mb_name  && mb_password  && mb_email;
      assert.ok(is_fulfilled, Definer.input_err1);

      const signup_data = {
        mb_name,
        mb_email,
        mb_password,
      };

      const memberApiService = new MemberApi();
      await memberApiService.signupRequest(signup_data);

    
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
      <Form 
      onFinish={handleSignupRequest}
      className="w-[566px] m-auto">
        <div className="w-[90%] m-auto">
          <h2 className="py-3">
            {" "}
            Enter your username and password to register.
          </h2>
          <Form.Item className="pb-3">
            <Input ref={nameRef} className="h-[40px]" placeholder="Name" />
          </Form.Item>
          <Form.Item className="pb-3">
            <Input className="h-[40px]" placeholder="Last Name" />
          </Form.Item>
          <Form.Item className="pb-3">
            <Input
              ref={emailRef}
              className="h-[40px]"
              placeholder="Enter your email address"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
            ref={passwordRef}
              className="h-[40px]"
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              className="h-[40px]"
              placeholder="Confirm your password"
            />
          </Form.Item>

          <Form.Item>
            <Button
             
              className=" w-full h-[40px]  mt-4 bg-sky-500/75"
              type="primary"
            >
              Sign Up
            </Button>
          </Form.Item>
          <Divider plain>Or Sign Up with</Divider>
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

export default Signup;
