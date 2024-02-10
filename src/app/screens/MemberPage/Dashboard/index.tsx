import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import { setLogout } from "../../../redux/userSlice";
import { useReduxDispatch } from "../../../hooks";
const { confirm } = Modal;

const Dashboard: FC = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [isFirstMount, setIsFirstMount] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const navigateTo = (path: string) => {
    navigate(path);
    setCurrentPath(path);
  };
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
        localStorage.removeItem("member_data");
        dispatch(setLogout());
        navigate("/");
        window.location.reload();
      },
    });
  };

  useEffect(() => {
    if (isFirstMount && currentPath === "/member-page") {
      navigateTo("/member-page/account-details");
      setIsFirstMount(false);
    }
  }, [navigate, isFirstMount, currentPath]);
  return (
    <div className="bg-[#FBFBFB] w-[310px] h-fit text-xl p-[15px] max-sm:hidden">
      <h1 className="font-bold">My Account</h1>
      <div className="flex flex-col gap-3 mt-[15px] border-b border-cyan-500 pb-[35px]">
        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-cyan-500 hover:text-cyan-500 hover:text-bold"
       onClick={() => navigateTo("/member-page/account-details")}>
          <h3 className=" text-base font-medium"> Account Details</h3>
        </div>

        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-cyan-500 hover:text-cyan-500 hover:text-bold"
        onClick = {() => navigate("/member-page/my-appointments")}>
          <h3 className="font-medium text-base"> My Appointments</h3>
        </div>

        <div className="transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-cyan-500 hover:text-cyan-500 hover:text-bold"
        onClick = {() => navigate(`/member-page/favorite-blogs/:id`)}>
          <h3 className="font-medium text-base"> Liked Blogs</h3>
        </div>

      </div>

      
      <div
        onClick={() => onLogOut()}
        className="flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px] text-base text-red-600"
      >
        <LogoutOutlined className="w-[20px] h-[20px] hover:scale-110" />
        <h3 className="font-normal">Log out</h3>
      </div>
    </div>
  );
};

export default Dashboard;
