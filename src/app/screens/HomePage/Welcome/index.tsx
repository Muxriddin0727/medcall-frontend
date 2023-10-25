import type { FC } from "react";
import { DownOutlined } from "@ant-design/icons";

const Welcome: FC = () => {
  return (
    <div className="bg-[url(https://www.pepperconstruction.com/sites/default/files/images/community-east-hospital-teg-architects-810_3138.jpg)] relative">
      <div className="absolute w-full h-full bg-black opacity-30 z-[1]"></div>
      <div className="relative z-10 py-[185px]">
        <h1 className="text-[64px] text-white font-bold text-center max-md:text-[30px]">
          Feel better about finding healthcare
        </h1>
        <p className="w-[622px] text-white m-auto text-center text-sm font-normal leading-[30px] max-md:w-[80%] max-md:m-auto max-md:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
          posuere sem purus enim eleifend habitant arcu, sed.
        </p>
        <div className="w-[80%]  bg-white m-auto mt-[50px] grid grid-cols-4 gap-4 p-[30px] max-md:grid-cols-2">
          <div className=" border border-cyan-500 border-opacity-30 p-[10px]">
            <h3 className="text-neutral-600 text-xs font-normal">
              Location <DownOutlined />
            </h3>
            <h1 className="font-bold mt-[5px]">Colifornia</h1>
          </div>{" "}
          <div className=" border border-cyan-500 border-opacity-30 p-[10px]">
            <h3 className="text-neutral-600 text-xs font-normal">
              Departments <DownOutlined />
            </h3>
            <h1 className="font-bold mt-[5px]">Cardiologist</h1>
          </div>{" "}
          <div className="w-[259px] h-[70px] border border-cyan-500 border-opacity-30 p-[10px]">
            <h3 className="text-neutral-600 text-xs font-normal">
              Price <DownOutlined />
            </h3>
            <h1 className="font-bold mt-[5px]">$0 ~ $1000</h1>
          </div>{" "}
          {/* Price  */}
          <div className=" bg-cyan-500 flex items-center justify-center text-white cursor-pointer">
            Seach
          </div>{" "}
          {/* Search  */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;