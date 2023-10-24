import type { FC } from "react";
import {Button} from "antd"

const Why: FC = () => {
  return (
    <div className="w-[90%] m-auto h-[800px] flex gap-24 justify-center mt-[100px] ">
      

      <div className=" w-[532px] max-md:w-full">
        <div>
          
          <h1 className=" w-[532px] text-neutral-800 text-5xl font-bold leading-[60.90px] max-md:w-fit max-md:text-3xl">
           Why Choose Us
          </h1>
          <p className="w-[479px] my-6 text-neutral-600 text-xl font-normal  leading-[27px] max-md:w-fit max-md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Ut viverra
            posuere sem purus enim eleifend habitant arcu, sed. Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Ut viverra
            posuere sem purus enim eleifend habitant arcu, sed
          </p>
        </div>

        <div className=" flex gap-16 ">
          <div className="w-[50%]">
            
            <Button className="h-12 mt-10 bg-cyan-500 rounded-md bg-sky-500/100" type="primary">Explore Now </Button>
          </div>

         
        </div>
      </div>

      <div className="relative max-md:hidden">
        <img
          className="w-[500px] h-[481px]"
          src="/doctors/doctorlar.jpg"
          alt="online doctor"
        />
    
      </div>
    </div>
  );
};

export default Why;
