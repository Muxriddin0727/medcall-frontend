import type { FC } from "react";
import {Button} from "antd"

const AboutUs: FC = () => {
  return (
    <div className="w-full h-[800px] flex gap-14 justify-center my-[120px] ">
      <div className="relative">
        <img
          className="w-[500px] h-[581px]"
          src="/doctors/onlined.jpg"
          alt="online doctor"
        />
        <img
          className="w-[240px] h-[160px] shrink absolute top-[460px] left-[300px]"
          src="/doctors/onlinedo.jpg"
          alt=" onlindo"
        />
      </div>

      <div className=" w-[532px]">
        <div>
          <h3 className="text-slate-950 text-sm font-normal  leading-[27px]">About Us</h3>
          <h1 className=" w-[532px] text-neutral-800 text-5xl font-bold font-['Rubik'] leading-[60.90px]">
            Feel better about <br />
            finding healthcare
          </h1>
          <p className="w-[479px] my-6 text-neutral-600 text-xl font-normal font-['Rubik'] leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br/> elit. Ut viverra
            posuere sem purus enim eleifend habitant arcu, sed.
          </p>
        </div>

        <div className=" flex gap-16 ">
          <div className="flex-col">
            <img className=" w-14 h-14 relative my-4" src="/icons/support.svg" alt=" support" />
            <h2 className="text-neutral-800 my-4 text-2xl font-medium ">From the best clinics in the region</h2>
            <p className=" w-[229px] text-neutral-600 text-sm font-normal ">A wide range of online consultations from doctors.</p>
            <Button className="w-[169px] h-12 mt-10 bg-cyan-500 rounded-md bg-sky-500/100" type="primary">Explore Now </Button>
          </div>

          <div>
            <img className=" w-14 h-14 relative my-4" src="/icons/team.svg" alt="team" />
            <h2 className="ext-neutral-800 text-2xl font-medium my-4 ">We carefully select doctors for our team</h2>
            <p className=" w-[229px] text-neutral-600 text-sm font-normal ">
        
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
