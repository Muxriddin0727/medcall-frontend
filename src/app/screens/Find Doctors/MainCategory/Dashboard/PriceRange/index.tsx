import type {FC} from "react";
import {Slider, Button} from "antd";

const PriceRange:FC= () => {
    return (
        <div>
            <div className="mt-[15px]">
            <h3 className="font-bold">Price Range</h3>
            <Slider
              className="w-[70%]"
              range
              defaultValue={[Number(10), Number(100)]}
              max={100}
            />
            <p className="font-normal">
              Price:{" "}
              <span className="font-bold text-[#40c0ce]">
                {[0]}$ - {[100]}$
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

    )
}

export default PriceRange;