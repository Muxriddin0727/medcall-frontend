import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { setLogout } from "../../../redux/userSlice";
import MemberApi from "../../../api/memberApi";
import { useReduxDispatch } from "../../../hooks";
const { confirm } = Modal;

const Dashboard: FC = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { logOutRequest } = new MemberApi();
  const onLogOut = () => {
    return confirm({
      title: "Do you want to logout?",
      icon: <ExclamationCircleFilled />,
      content: "Please make sure, bacause this action cannot be undone!",
      okButtonProps: {
        danger: true,
      },
      okText: "I'm sure",
      onOk: async () => {
        // const data = await logOutRequest();
        localStorage.removeItem("user_data");
        dispatch(setLogout());
        navigate("/");
      },
    });
  };
  return (
    <div className="bg-[#FBFBFB] w-[310px] h-fit text-xl p-[15px] max-sm:hidden">
      <h1 className="font-bold">My Account</h1>
      <div className="flex flex-col gap-3 mt-[15px] border-b border-[#46A35880] pb-[35px]">
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold"
        onClick = {() => navigate("/member-page/account-details")}>
          <h3 className="font-normal text-base"> Account Details</h3>
        </div>

        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold"
        onClick = {() => navigate("/member-page/my-appointments")}>
          <h3 className="font-normal text-base"> My Appointments</h3>
        </div>

        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:text-bold"
        onClick = {() => navigate("/member-page/favorite-blogs")}>
          <h3 className="font-normal text-base"> Liked Blogs</h3>
        </div>

      </div>

      
      <div
        onClick={() => onLogOut()}
        className="flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px] text-base text-red-600"
      >
        <LogoutOutlined className="w-[20px] h-[20px]" />
        <h3 className="font-normal">Log out</h3>
      </div>
    </div>
  );
};

export default Dashboard;
