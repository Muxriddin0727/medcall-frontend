import { FC, useState } from "react";
import DescriptionInfo from "./DescriptionInfo";
import Reviews from "./Reviews";

const Description: FC = () => {
  return (
    <div className="mt-[92px]">
      <div className="flex gap-5 border-b border-[#46A358] pb-[5px]">
        <h3
          className={`cursor-pointer hover:text-[#46A358] ${
            <DescriptionInfo /> && "text-[#46A358]"
          }`}
          onClick={() => <DescriptionInfo />}
        >
          Description
        </h3>
        <h3
          className={`cursor-pointer hover:text-[#46A358] ${
            <Reviews /> && "text-[#46A358]"
          }`}
          onClick={() => <Reviews />}
        >
          Reviews
        </h3>
      </div>
    </div>
  );
};

export default Description;
<div>
  <DescriptionInfo />
  <Reviews />
</div>;
