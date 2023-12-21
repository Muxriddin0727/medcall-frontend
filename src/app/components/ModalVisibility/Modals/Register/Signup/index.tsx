import { FC, useState } from "react";
import { Button, Form, Input, Divider, notification } from "antd";
import { createFromIconfontCN, LoginOutlined,  LoadingOutlined} from "@ant-design/icons";
import { useReduxDispatch } from "../../../../../hooks";
import { setAuthModal } from "../../../../../redux/modalSlice";
import { setSignup } from "../../../../../redux/userSlice";
import { useAxios } from "../../../../../customHooks/useAxios";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Signup: FC = (props: any) => {

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useReduxDispatch();
  const axios = useAxios();


  const onFinish = async (value: object) => {
    setLoading(true);
    const data = await axios({url: "/client/sign-up", method: "POST", body: value});;
    setLoading(false);
    if (!data)
      return notification.error({
        message: "Registration failed",
        description: "Please check your details and try again",
      });
    dispatch(setAuthModal());
    dispatch(setSignup(data.data.data));
  };

  return (
    <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
      <Form onFinish={onFinish} className="w-[566px] m-auto">
        <div className="w-[90%] m-auto">
          <h2 className="py-3">
            {" "}
            Enter requested details below to register.
          </h2>
          <Form.Item
            name="mb_username"
            rules={[{ required: true, message: "Please input your username!" }]}
            className="pb-3"
          >
            <Input className="h-[40px]" placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="mb_name"
            rules={[{ required: true, message: "Please input your name!" }]}
            className="pb-3"
          >
            <Input className="h-[40px]" placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="mb_last_name"
            rules={[{ required: true, message: "Please input your Last name!" }]}
            className="pb-3"
          >
            <Input className="h-[40px]" placeholder="Last Name" />
          </Form.Item>
          
          <Form.Item
            name="mb_email"
            rules={[{ required: true, message: "Please input your username!" }]}
            className="pb-3"
          >
            <Input
              className="h-[40px]"
              placeholder="Enter your email address"
            />
          </Form.Item>
          <Form.Item
            name="mb_password"
            rules={[{ required: true, message: "Please input your username!" }]}
            className="pb-3"
          >
            <Input.Password
              className="h-[40px]"
              placeholder="Enter your password"
            />
          </Form.Item>
          <Form.Item
            name="mb_pasword"
            rules={[{ required: true, message: "Please input your username!" }]}
            className="pb-3"
          >
            <Input.Password
              className="h-[40px]"
              placeholder="Confirm your password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              className=" w-full h-[40px]  mt-4 bg-sky-500/75"
              type="primary"
              htmlType="submit"
            >
              {loading ? <LoadingOutlined/> : "Sign Up"}
            </Button>
          </Form.Item>
          <Divider plain></Divider>
          <div className="flex w-full m-auto ">
          <img
          className="ml-[-10px]"
          src="/images/logo.png"
          alt=" logo"
        />
        <LoginOutlined className="text-3xl text-cyan-500 "/>
        </div>
          
        

        
        </div>
      </Form>
    </div>
  );
};

export default Signup;
