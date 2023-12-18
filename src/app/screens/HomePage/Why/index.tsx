import type { FC } from "react";
import { Button, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../../hooks";

const Why: FC = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50">
      <div className="w-[90%] m-auto mb-[100px]  flex gap-24 justify-center   ">
        <div className=" w-[532px] my-16 max-md:w-full">
          <div>
            <h1 className=" w-[532px] text-neutral-800 text-5xl font-bold leading-[60.90px] max-md:w-fit max-md:text-3xl">
              Why Choose Us
            </h1>
            <p className="w-[479px] my-6 text-neutral-600 text-xl font-normal  leading-[27px] max-md:w-fit max-md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
              viverra posuere sem purus enim eleifend habitant arcu, sed. Lorem
              ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut
              viverra posuere sem purus enim eleifend habitant arcu, sed
            </p>
          </div>

          <div className=" flex gap-16 ">
            <div className="w-[50%]">
              <Button
                onClick={() => navigate(`/help`)}
                className="h-12 mt-10 bg-cyan-500 rounded-md bg-sky-500/100"
                type="primary"
              >
                Explore Now{" "}
              </Button>
            </div>
          </div>
        </div>

        <div className="my-20 max-md:hidden">
          <Image
            className="w-[400px] "
            src="/images/hospital.jpg"
            alt="hospital"
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
