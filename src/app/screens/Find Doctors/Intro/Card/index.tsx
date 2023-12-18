import type { FC } from "react";
import { Button } from "antd";
import { IntroItemType } from "../../../../../types/others";
import { useReduxDispatch } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

const Card: FC <IntroItemType>= ({title, description, buttonText, src}) => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  return (
    <div className="h-[450px] bg-[#F5F5F5]  mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
      <div className="flex-[2] pl-10 ">
        <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
          WELCOME TO MEDCALL
        </h3>
        <h1 className="font-black text-[#3D3D3D] text-6xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
        {title} <span className="text-[#3699af]"><br/>HEALTH</span> <br/> 
          
        </h1>
        <p className="  text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] max-sm:w-full">
          {description}
        </p>
        <div className="pb-8">
          <Button
          onClick={() => navigate(`/help`)}
            type="primary"
            className="my-[20px] w-[140px]  bg-cyan-500 h-9 max-md:mt-[10px]"
          >
            {buttonText}
          </Button>
        </div>
      </div>
      <div className=" flex-[1]   flex justify-center items-center max-md:hidden">
        <img src={src} alt="smile" />
      </div>
    </div>
  );
};

export default Card;
