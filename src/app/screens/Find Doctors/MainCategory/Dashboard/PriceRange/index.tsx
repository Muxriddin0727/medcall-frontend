import { FC, useState } from "react";
import { Slider, Button } from "antd";

const PriceRange: FC = () => {
  const [sliderValues, setSliderValues] = useState([0, 1000]);

  return (
    <div className="mt-[15px]">
      <h3 className="font-bold">Price Range</h3>
      <div className="pl-[16px]">
        <Slider
          className="w-full"
          range
          value={sliderValues}
          defaultValue={[0, 1000]}
          min={0}
          max={1000}
          onChange={setSliderValues}
        />
        <p className="font-normal">
          Price:{" "}
          <span className="font-bold text-[#40c0ce]">
            {sliderValues[0]}$ - {sliderValues[1]}${" "}
          </span>
        </p>
        <Button
          type="primary"
          className="mt-[16px] bg-cyan-500  px-[23px]  rounded-lg"
        >
          Filter
        </Button>
      </div>
    </div>
  );
};

export default PriceRange;
