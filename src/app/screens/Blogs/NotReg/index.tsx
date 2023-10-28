import { FC } from "react";
import {Button} from "antd";

const NotReg: FC = () => {
    return (
      <div className="flex flex-col items-center">
        {" "}
        <div className="w-full h-[300px] p-[50px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[200px] max-md:h-[150px] justify-between">
          <img
            src="/icons/desked.png"
            className="w-[15%] h-full"
            alt="blog_avatar_1"
          />
          <img
            className="w-[13%] h-full mt-[20px]"
            src='/icons/boboy.png'
            alt="blog_avatar_2"
          />
          <img
            className="w-[15%] h-full mt-[50px]"
            src="/icons/blogger.png"
            alt="blog_avatar_3"
          />
          <img
            className="w-[15%] h-full mt-[20px]"
            src= "/icons/telcha.png"
            alt="blog_avatar_4"
          />
          <img
            className="w-[14%] h-full"
            src="/icons/togo.png"
            alt="blog_avatar_5"
          />
        </div>
        <h1 className="mt-[50px] font-black text-center text-[6vw]">
        Navigate Health Smarter with  <span className="text-[#48b6ca]">MedCall</span>  
        </h1>
        <p className="text-center text-[25px] mt-[20px] max-xl:text-[2vw] ">
        MedCall, your trusted online medical consulting platform, provides a convenient and secure way to access expert healthcare advice from the comfort of your home.
        </p>
        
        <Button type="primary" className="mt-12  bg-cyan-500 ">
          Join MedCall
        </Button>
        
      </div>
    );
  };
  
  export default NotReg;