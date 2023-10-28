import type { FC } from "react";
import { useNavigate } from "react-router-dom";

import { HeartFilled, WechatOutlined, DownOutlined } from "@ant-design/icons";

const Card: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="group  h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        <div className="bg-[#46A358] text-white absolute top-3 left-0 px-[5px] py-[3px]">
          15% OFF
        </div>
        <img width={180} src="/doctors/alisa.jpg" alt="img" className="" />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <WechatOutlined />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
            <HeartFilled className="text-[red]" />
          </div>
          <div 
          onClick = {() => navigate ("/find-doctors/123")} 
          className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <DownOutlined />
          </div>
        </div>
      </div>
      <h3 className="font-normal cursor-pointer mt-[12px]">Psychologist</h3>
      <p className="text-[#46A358] font-bold">
        30 min - 25 000 UZS
        <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
          30 000 UZS
        </span>
      </p>
    </div>
  );
};

export default Card;
