import { useState, type FC } from "react";
import { Button, Form, Input, Divider, notification } from "antd";
import { createFromIconfontCN, GoogleOutlined, LoadingOutlined } from "@ant-design/icons";
// import Avatar from "react-avatar";
import { useReduxDispatch } from "../../../../../hooks";
import { setAuthModal } from "../../../../../redux/modalSlice";
import { setLogin } from "../../../../../redux/userSlice";
import { useAxios } from "../../../../../customHooks/useAxios";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Login: FC = () => {

  const axios = useAxios();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useReduxDispatch();



  const onFinish = async (value: object) => {

    setLoading(true);
    const data = await axios ({url: "/login", method: "POST", body: value});
    setLoading(false);
    if (!data) 
     return notification.error({
      message: "Not found",
      description: "Username or password is incorrect",
     });
     dispatch(setAuthModal());
     dispatch(setLogin(data.data.data));
    
  };

  

  return (
    <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
      <Form
        onFinish={onFinish}
        className="w-[566px] h-[472px] m-auto"
      >
        <div className="w-[90%] m-auto">
          <h2 className="py-3"> Enter your username and password to login.</h2>
          <Form.Item
            name="mb_name"
            
            rules={[{ required: true, message: "Please input your username!" }]}
            className="pb-3"
          >
            <Input className="h-[40px]" placeholder="Name"  />
          </Form.Item>
          <Form.Item
            name="mb_password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              // onKeyPress={passwordKeyPressHandler}
              className="h-[40px]"
              placeholder="********"
              suffix={null}
              autoComplete="current-password"
             
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
            {loading ? <LoadingOutlined/> : "Login"}
            </Button>
          </Form.Item>

          {/* <Form.Item>
            <Avatar
              name={
                typeof nameRef.current?.input === "string"
                  ? nameRef.current?.input
                  : nameRef.current?.input?.value || "User"
              }
              size="50"
              round={true}
            />
          </Form.Item> */}

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
