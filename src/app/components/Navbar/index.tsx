import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from 'antd';
import { MenuOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks";
import { setAuthModal } from "../../redux/modalSlice";



const Navbar: FC = () => {
  const dispatch= useReduxDispatch();



  return (
    <>
      <div className=" flex justify-between px-[50px] py-[35px]">
        <div className="flex">
          <img
            className="w-[172px] h-[42px] "
            src="/images/logo.png" alt="logo"
          />
        </div>
        <div className="flex text-slate-950 text-sm font-normal">
          <div className="max-md:hidden flex gap-5 items-center">
            <NavLink to= "/">Home</NavLink>
            <NavLink to="/appointment">Appointments</NavLink>
            <NavLink to="/findDoctors">FindDoctors</NavLink>
            <NavLink to="/myPage">MyPage</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/help">Help</NavLink>
            <Button 
            onClick = {() => dispatch(setAuthModal())} 
            className="ml-[100px]">Register </Button>
          </div>
          <div className="hidden max-md:block cursor-pointer">
            <MenuOutlined />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

{/* <img
className="w-[172px] h-[42px] mr-19 ml-28 "
src="/images/logo.png" alt="logo"
/> */}






