import { useState, type FC } from "react";
import { Button, Form, Input, Divider, notification } from "antd";
import {
  createFromIconfontCN,
  GoogleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
// import Avatar from "react-avatar";
import { useReduxDispatch } from "../../../../../hooks";
import { setAuthModal } from "../../../../../redux/modalSlice";
import { setLogin } from "../../../../../redux/userSlice";
import { useAxios } from "../../../../../customHooks/useAxios";
import { sweetFailureProvider } from "../../../../../../lib/sweetAlert";
import { Definer } from "../../../../../../lib/Definer";
import { useNavigate } from "react-router-dom";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Login: FC = () => {
  const axios = useAxios();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useReduxDispatch();

  const onFinish = async (value: object) => {
    try {
      setLoading(true);
      const data = await axios({
        url: "/client/login",
        method: "POST",
        body: value,
      });
      setLoading(false);
      if (!data) {
        return notification.error({
          message: "Not found",
          description: "Username or password is incorrect",
        });
      }
      dispatch(setAuthModal());
      dispatch(setLogin(data.data));
    } catch (error) {
      sweetFailureProvider(Definer.general_err1);
    }
  };

  return (
    <div className=" w-[full]  flex justify-between items-center mt-[20px] ">
      <Form onFinish={onFinish} className="w-[566px] h-[350px] m-auto">
        <div className="w-[90%] m-auto">
          <h2 className="py-3"> Enter your username and password to login.</h2>
          <Form.Item
            name="mb_username"
            rules={[{ required: true, message: "Please input your username!" }]}
            className="pb-3"
          >
            <Input className="h-[40px]" placeholder="Userame" />
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

          <Form.Item>
            <Button
              className=" w-full h-[40px]  mt-4 bg-sky-500/75"
              type="primary"
              htmlType="submit"
            >
              {loading ? <LoadingOutlined /> : "Login"}
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

          <Divider plain></Divider>
        </div>
      </Form>
    </div>
  );
};

export default Login;
