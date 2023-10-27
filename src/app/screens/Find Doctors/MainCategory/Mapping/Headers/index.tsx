import type { FC } from "react";
import { Select } from "antd";

const Headers: FC = () => {
  const active_type_style = "pb-[3px] text-[#46A358] border-b border-[#46A358]";

  return (
    <div className=" w-full  flex justify-between">
      <div className="flex gap-10  max-sm:gap-4">
        <h3 className="cursor-pointer font-normal transition-colors    ">
          All Doctors
        </h3>
        <h3 className="cursor-pointer font-normal transition-colors ">
          Top Doctors
        </h3>
        <h3 className="cursor-pointer font-normal transition-colors">
          Discount
        </h3>
      </div>
      <div className=" flex items-center justify-center gap-2 max-lg:hidden ">
        <p>Sort by:</p>
        <Select
          defaultValue={"Default Sorting"}
          options={[
            {
              label: "Default Sorting",
              value: "default-sorting",
            },
            {
              label: "The Cheapest",
              value: "the-cheapest",
            },
            {
              label: "Most Expensive",
              value: "most-expensive",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Headers;
