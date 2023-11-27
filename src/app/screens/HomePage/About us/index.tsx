import type { FC } from "react";
import {Button} from "antd"

const AboutUs: FC = () => {
  return (
    <div className="w-[90%] m-auto h-[800px] flex gap-24 justify-center mt-[100px] ">
      <div className="relative max-md:hidden">
        <img
          className="w-[500px] h-[580px] rounded-lg"
          src="/doctors/onlined.jpg"
          alt="online doctor"
        />
        <img
          className="w-[240px] h-[160px] shrink absolute top-[460px] left-[300px] rounded-lg"
          src="/doctors/onlinedo.jpg"
          alt=" onlindo"
        />
      </div>

      <div className=" w-[532px] max-md:w-full">
        <div>
          <h3 className="text-slate-950 text-sm font-normal  leading-[27px]">About Us</h3>
          <h1 className=" w-[532px] text-neutral-800 text-5xl font-bold leading-[60.90px] max-md:w-fit max-md:text-3xl">
            Feel better about <br />
            finding healthcare
          </h1>
          <p className="w-[479px] my-6 text-neutral-600 text-xl font-normal  leading-[27px] max-md:w-fit max-md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Ut viverra
            posuere sem purus enim eleifend habitant arcu, sed.
          </p>
        </div>

        <div className=" flex gap-16 ">
          <div className="w-[50%]">
            <img className=" w-14 h-14 relative my-4" src="/icons/support.svg" alt=" support" />
            <h2 className="text-neutral-800 my-4 text-2xl font-medium max-md:text-xl">From the best clinics in the region</h2>
            <p className="  text-neutral-600 text-sm font-normal ">A wide range of online consultations from doctors.</p>
            <Button className="h-12 mt-10 bg-cyan-500 rounded-md bg-sky-500/100" type="primary">Explore Now </Button>
          </div>

          <div className="w-[]50%">
            <img className=" w-14 h-14 relative my-4" src="/icons/team.svg" alt="team" />
            <h2 className="text-neutral-800 text-2xl font-medium my-4 max-md:text-xl ">We carefully select doctors for our team</h2>
            <p className=" text-neutral-600 text-sm font-normal ">
        
              The ability to use the services of a qualified doctor from
              anywhere in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
