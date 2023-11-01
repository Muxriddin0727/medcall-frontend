import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks";
import { setAuthModal } from "../../redux/modalSlice";
import { LoginOutlined } from "@ant-design/icons";
import { verifiedMemberData } from "../../api/verify";



const Navbar: FC = (props: any) => {
  const dispatch= useReduxDispatch();



  return (
    <div className="px-[50px] max-sm:px-[10px] ">
      <div className=" w-[90%] m-auto flex justify-between py-[35px]">
        <div className="flex">
          <img
            className="w-[172px] h-[42px] "
            src="/images/logo.png" alt="logo"
          />
        </div>
        <div className="flex text-slate-950 text-xm font-normal">
          <div className="max-md:hidden flex gap-5 items-center">
            <NavLink to= "/">Home</NavLink >
            <NavLink to="/find-doctors">Find Doctors</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/help">Help</NavLink>
            {verifiedMemberData ? (
            <Button 
            type="primary"
            onClick = {() => dispatch(setAuthModal())} 
            className="ml-[100px] bg-cyan-500 " icon={<LoginOutlined />}> Register </Button>
            ) : (
              <img
              style={{ width: "48px", height: "48px", borderRadius: "24px" }}
              src={verifiedMemberData.mb_image}
              onClick={props.logoutRequest}
            />
          )}
          </div>
          <div className="hidden max-md:block cursor-pointer">
            <MenuOutlined
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;







