import type { FC } from "react";
import Description from "./Description";
import DoctorInfo from "./DoctorInfo";
import Img from "./Img";


const SingleDoctor: FC = () => {
    return (
      <div className=" w-[90%] m-auto mt-[43px]">
      <div className="flex w-full gap-[200px] max-lg:flex-col">
          <div className=" w-[30%]"><Img  /></div>
          <div className="w-[70%]"><DoctorInfo /></div>
      </div>
      <Description />
  </div>
    );
  };
  
  export default SingleDoctor;
  