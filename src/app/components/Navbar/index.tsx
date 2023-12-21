import { FC } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Button, FloatButton } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import { MenuOutlined, ScheduleOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../hooks";
import { setAuthModal, setChatModal } from "../../redux/modalSlice";
import { setTokenExpired } from "../../redux/userSlice";
import { LoginOutlined } from "@ant-design/icons";
import { useCheckTokenValidity } from "../../api/verify";
// import { verifiedMemberData } from "../../api/verify";

const Navbar: FC = (props: any) => {
  const dispatch = useReduxDispatch();
  const { member_data } = useReduxSelector((state) => state.user);
  const navigate = useNavigate();
  const checkTokenValidity = useCheckTokenValidity();

  return (
    <div className="px-[50px] max-sm:px-[10px] ">
      <div className=" w-[90%] m-auto flex justify-between py-[35px]">
        <div className="flex">
          <img className="w-full h-auto " src="/images/logo.png" alt="logo" />
        </div>
        <div className="flex text-slate-950 text-xm font-normal">
          <div className="max-md:hidden flex gap-5 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/find-doctors">Find Doctors</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/help">About Us</NavLink>
            {member_data && (
              <ScheduleOutlined
              
                className="text-2xl ml-20 h"
                onClick={() => navigate("/member-page/my-appointments")}
              />
            )}
            <Button
              type="primary"
              onClick={() => {
                if (member_data) navigate("/member-page");
                else dispatch(setAuthModal());
              }}
              className="ml-[10px] bg-cyan-500 "
              icon={<LoginOutlined />}
            >
              {member_data ? `${member_data.mb_username}` : "Register"} {""}
            </Button>
          </div>
          <div className="hidden max-md:block cursor-pointer">
            <MenuOutlined />
          </div>
        </div>
        <FloatButton
          icon={<MessageOutlined />}
          tooltip={<div>Have something to ask ?</div>}
          onClick={() => dispatch(setChatModal())}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
