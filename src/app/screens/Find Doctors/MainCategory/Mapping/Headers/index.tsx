import { useState, type FC } from "react";
import { Select } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useAxios } from "../../../../../customHooks/useAxios";
import { useAppSearchParams } from "../../../../../customHooks/useSearchParams";

const Headers: FC = () => {
  const { getParams, setParams } = useAppSearchParams();
  const active_type_style = "pb-[3px] text-[#46A358] border-b border-[#46A358]";
  const paramsType = getParams("type");
  const paramsSort = getParams("sort");

  return (
    <div className=" w-full  flex justify-between">
      <div className="flex gap-10  max-sm:gap-4">
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "all-doctors" && active_type_style
          }`}
          onClick={() => setParams({ type: "all-doctors" })}
        >
          All Doctors
        </h3>
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "top-doctors" && active_type_style
          }`}
          onClick={() => setParams({ type: "top-doctors" })}
        >
          Top Doctors
        </h3>
        <h3
          className={`cursor-pointer font-normal transition-colors ${
            paramsType === "discount" && active_type_style
          }`}
          onClick={() => setParams({ type: "discount" })}
        >
          Discount
        </h3>
      </div>
      <div className=" flex items-center justify-center gap-2 max-lg:hidden ">
        <p>Sort by:</p>
        <Select
          onChange={(e) => setParams({ sort: e })}
          defaultValue={paramsSort || "Default Sorting"}
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
      <div className="hidden max-md:block cursor-pointer">
        <MenuOutlined />
      </div>
    </div>
  );
};

export default Headers;
