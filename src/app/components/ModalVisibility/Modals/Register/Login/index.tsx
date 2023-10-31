import { FC, useState } from "react";
import assert from "assert";
import { Definer } from "../../../../../../lib/Definer";
import { Button, Form, Input, Divider } from "antd";
import { createFromIconfontCN, GoogleOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "../../../../../hooks";
import { setAuthModal } from "../../../../../redux/modalSlice";
import MemberApi from "../../../../../api/memberApi";
import { sweetErrorHandling } from "../../../../../../lib/sweetAlert";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

//   <Button
//   onClick = {() => dispatch(setAuthModal())}
//   className="ml-[100px]">Register </Button>

const Login: FC = (props: any) => {
  const dispatch = useReduxDispatch();
  const [mb_nick, set_mb_name] = useState<string>("");
  const [mb_phone, set_mb_email] = useState<number>(0);
  const [mb_password, set_mb_password] = useState<string>("");

  // HANDLERS //

  const handleUsername = (e: any) => {
    set_mb_name(e.target.value);
  };
  const handleEmail = (e: any) => {
    set_mb_email(e.target.value);
  };
  const handlePassword = (e: any) => {
    set_mb_password(e.target.value);
  };

  const handleSignupRequest = async () => {
    try {
      const is_fulfilled = mb_nick != "" && mb_password != "" && mb_phone != 0;
      assert.ok(is_fulfilled, Definer.input_err1);

      const signup_data = {
        mb_nick: mb_nick,
        mb_phone: mb_phone,
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

  const handleLoginRequest = async () => {
    try {
      const is_fulfilled = mb_nick != "" && mb_password != "";
      assert.ok(is_fulfilled, Definer.input_err1);

      const login_data = {
        mb_nick: mb_nick,
        mb_password: mb_password,
      };

      const memberApiService = new MemberApi();
      await memberApiService.loginRequest(login_data);

      window.location.reload();
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const passwordKeyPressHandler = (e: any) => {
    if (e.key == "ENTER" && props.signUpOpen) {
      handleSignupRequest().then();
    } else if (e.key == "ENTER" && props.loginOpen) {
      handleLoginRequest().then();
    }
  };

  return (
    <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
      <Form className="w-[566px] h-[472px] m-auto">
        <div className="w-[90%] m-auto">
          <h2 className="py-3"> Enter your username and password to login.</h2>
          <Form.Item className="pb-3">
            <Input
              onChange={handleUsername}
              className="h-[40px]"
              placeholder="Name"
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              onChange={handlePassword}
              onKeyPress={passwordKeyPressHandler}
              className="h-[40px]"
              placeholder="********"
              suffix={null}
            />
          </Form.Item>

          <Button className="flex start-[300px] " type="link">
            Forgot Password?
          </Button>
          <Form.Item>
            <Button
             onClick={handleLoginRequest}
              className=" w-full h-[40px]  mt-4 bg-sky-500/75"
              type="primary"
            >
              Login
            </Button>
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
