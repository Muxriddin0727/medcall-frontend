import type { FC } from "react";
import { Image } from "antd";

const Img: FC = () => {
  return (
    <div>
      <div className="flex gap-6 max-lg:flex-col">
        <div className="cursor-pointer flex justify-center items-center w-[450px]">
          <Image
            loading={"lazy"}
            src="/doctors/david.jpg"
            className="w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Img;
