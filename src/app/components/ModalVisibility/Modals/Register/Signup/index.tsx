import  { FC, useState } from "react";
import assert from "assert";
import { Definer } from "../../.././../.././../lib/Definer";
import { sweetErrorHandling } from "../../../../../../lib/sweetAlert";
import { useReduxDispatch } from "../../../../../hooks";
import { Button, Form, Input, Divider } from "antd";
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import MemberApi from "../../../../../api/memberApi";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Signup: FC = (props: any) => {
  const dispatch = useReduxDispatch();
  const [mb_name, set_mb_name] = useState<string>("");
  const [mb_email, set_mb_email] = useState<string>("");
  const [mb_password, set_mb_password] = useState<string>("");

   /** HANDLERS */
   const handleUsername = (e: any) => {
    set_mb_name (e.target.value);
  };
  const handleEmail = (e: any) => {
    set_mb_email  (e.target.value);
  };
  const handlePassword = (e: any) => {
    set_mb_password (e.target.value);
  };

  const handleSignupRequest = async () => {
    try {
      const is_fulfilled = mb_name != "" && mb_password != "" && mb_email != "";
      assert.ok(is_fulfilled, Definer.input_err1);

      const signup_data = {
        mb_name: mb_name,
        mb_email: mb_email,
        mb_password: mb_password,
      };

      const memberApiService = new MemberApi();
      await memberApiService.signupRequest(signup_data);

    
      window.location.reload();
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
      <Form className="w-[566px] m-auto">
        <div className="w-[90%] m-auto">
          <h2 className="py-3">
            {" "}
            Enter your username and password to register.
          </h2>
          <Form.Item className="pb-3">
            <Input onChange={handleUsername} className="h-[40px]" placeholder="Name" />
          </Form.Item>
          <Form.Item className="pb-3">
            <Input className="h-[40px]" placeholder="Last Name" />
          </Form.Item>
          <Form.Item className="pb-3">
            <Input
              onChange={handleEmail}
              className="h-[40px]"
              placeholder="Enter your email address"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
            onChange={handlePassword}
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
             onClick={handleSignupRequest}
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
