import type { FC } from "react";
import { DownOutlined } from "@ant-design/icons";

const Welcome: FC = () => {
  return (
    <div className="/bg-[url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fhmcarchitects.com%2Fnews%2Fdesigning-for-better-mental-health-in-the-emergency-department-2020-03-25%2F&psig=AOvVaw3sIfgJ_8x4j_RTIsFn60Bg&ust=1698156956546000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCkzOOtjIIDFQAAAAAdAAAAABAJ)] relative">
      <div className="absolute w-full h-full bg-black opacity-30 z-[1]"></div>
      <div className="relative z-10 py-[185px]">
        <h1 className="text-[64px] text-white font-bold text-center">
          Feel better about finding healthcare
        </h1>
        <p className="w-[622px] text-white m-auto text-center text-sm font-normal leading-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
          posuere sem purus enim eleifend habitant arcu, sed.
        </p>
        <div className="w-[80%] h-[118px] bg-white m-auto mt-[50px] flex justify-between items-center px-[30px]">
          <div className="w-[259px] h-[70px] border border-cyan-500 border-opacity-30 p-[10px]">
            <h3 className="text-neutral-600 text-xs font-normal">
              Location <DownOutlined />
            </h3>
            <h1 className="font-bold mt-[5px]">Colifornia</h1>
          </div>{" "}
          <div className="w-[259px] h-[70px] border border-cyan-500 border-opacity-30 p-[10px]">
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
          <div className="w-[259px] h-[70px] bg-cyan-500 flex items-center justify-center text-white cursor-pointer">
            Seach
          </div>{" "}
          {/* Search  */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;