import type { FC } from "react";
import { Image } from "antd";
import { FindDoctors } from "../../../.././types/user";


const Img: FC <{value: FindDoctors}> = ({value}) => {
  return (
    <div>
      <div className="flex gap-6 max-lg:flex-col">
        <div className="cursor-pointer flex justify-center items-center w-[250px]">
          <Image
            loading={"lazy"}
            src={`http://46.28.44.182:3002/${value.mb_image}`}
            className="w-[250px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Img;