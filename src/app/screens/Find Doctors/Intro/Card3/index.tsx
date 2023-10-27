import type { FC } from "react";
import { Button } from "antd";

const Card3: FC = () => {
  return (
    <div className="h-[450px] bg-[#F5F5F5]  mt-3 flex max-2xl:h-[400px] max-md:h-[300px]">
      <div className="flex-[2] pl-10 ">
        <h3 className="font-medium text-base mt-[68px] max-lg:text-sm max-md:text-xs max-md:mt-[15px]">
          WELCOME TO MEDCALL
        </h3>
        <h1 className="font-black text-[#3D3D3D] text-6xl max-2xl:text-6xl max-lg:text-5xl max-md:text-2xl ">
          LET'S BEGIN YOUR JOURNEY TO <br/>
          <span className="text-[#3699af]">WELLNESS</span>
        </h1>
        <p className=" py-[] text-sm font-normal text-[#727272] w-3/5 max-lg:text-xs mt-[10px] ">
          MedCall is your trusted destination for accessible, convenient, and
          expert medical advice and care. We bring the expertise of healthcare
          professionals to your fingertips, offering a comprehensive suite of
          telemedicine services tailored to your needs.
        </p>
        <div className="pb-8">
          <Button
            type="primary"
            className="my-[20px] w-[140px]  bg-cyan-500 h-9 max-md:mt-[10px]"
          >
            EXPLORE NOW
          </Button>
        </div>
      </div>
      <div className="flex-[1] relative  flex justify-center items-center max-md:hidden">
        <img src="/icons/korsatma.png" alt="flower_1" />
      </div>
    </div>
  );
};

export default Card3;
