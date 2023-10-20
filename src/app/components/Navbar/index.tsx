import { FC } from "react";
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Radio } from 'antd';
import { Typography } from 'antd';
import { Input, Space } from 'antd';
import { useReduxDispatch } from "../../hooks";
 import { setAuthModal } from "../../redux/modalSlice";
//  import type { SearchProps } from '../Search';

// UI //
const { Title,Text } = Typography;
const { Search } = Input;
// const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);



const Navbar: FC = () => {
  const dispatch =useReduxDispatch();
   

    return (
        <>
        <div className=" m-auto bg-gradient-to-b from-sky-300 to-cyan-200">
        <div className="p-8  ml-12  h-[674px] items-center">
          <div className="flex gap-16 w-[100%]  text-black text-xl font-bold font-['Noto Sans']">
            
            <h3 className="cursor-pointer" >
            <NavLink to="/">Home</NavLink>
            </h3>
            <h3 className="cursor-pointer">
            <NavLink to="/appointment">Appointments</NavLink>
            </h3>
            <h3 className="cursor-pointer">
            <NavLink to="/findDoctors">FindDoctors</NavLink>
            </h3>
            <h3 className="cursor-pointer">
            <NavLink to="/myPage">MyPage</NavLink>
            </h3>
            <h3 className="cursor-pointer">
            <NavLink to="/blogs">Blogs</NavLink>
            </h3>
            <h3 className="cursor-pointer">
            <NavLink to="/help">Help</NavLink>
            </h3>
            
            <img
                 className="w-[172px] h-[42px] mr-19 ml-28 " 
                 src="/images/logo.png" alt="logo"
            />
            <div>
            <button className=" w-[172px] h-[42px] " >
                  <>
                  <Radio.Group defaultValue="Log in" buttonStyle="solid">
                  <Radio.Button 
                  value="Log in"
                  onClick= {()=>{
                    dispatch(setAuthModal());
                  }}
                  >
                    Log in</Radio.Button>
                  <Radio.Button 
                  value="Sign up"
                  onClick= {()=>{
                    dispatch(setAuthModal());
                  }}
                  >
                    Sign up</Radio.Button>
                  </Radio.Group>
                  </>
            </button>
            </div>
          </div>
          <div className="flex ">
          <div className="mt-14">
          <div><Text className="w-[685px] h-[188px]  text-black text-[64px] font-semibold font-['Noto Sans']"> Feel better about <br/> finding healthcare<br/></Text> </div>
          <div className="mt-12"><Text className="w-[659px] h-[140px]  text-black text-xl font-light font-['Noto Sans']">Neque porro quisquam est, qui dolorem ipsum quia dolor sit <br/> amet, consectetur, adipisci velit, sed qu Neque porro quisquam <br/>est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci<br/> quia dolor sit amet, consectetur, adipisci birikkki uch tort<br/></Text></div>
          <div><Search className=" w-[680px] h-[40px] mt-16 bg-sky-500 rounded-xl shadow"
            allowClear
            placeholder="input search text"
            enterButton="Search"
            size="large"
            // onSearch={onSearch}
          /> </div>
          <div className="mt-6"><Text className=" text-black text-4xl font-bold font-['Noto Sans']" >Make an appointment with best doctors </Text></div>
            </div>
            <div className=" absolute  right-[160px] w-[400px] h-[629px]">
              <img src="/images/shield.png" alt="shield"/>
            </div>
            <div className="absolute bottom-[320px] right-[490px] w-[196px] h-[195px]">
              <img src="/images/heart.png" alt="heart" />
            </div>
            <div className="absolute bottom-16 right-2 w-[756px] h-[460px]">
              <img src="/images/header.png" alt="header" />
            </div>
            </div>
      
      </div>
      </div>
      <Outlet />
      </>

      
    )
};

export default Navbar;




        

