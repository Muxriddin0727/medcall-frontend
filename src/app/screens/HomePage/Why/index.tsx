import type { FC } from "react";
import { Button, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "../../../hooks";

const Why: FC = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50 ">
      <div className="w-[90%] m-auto mb-[100px]  flex gap-24 justify-center   ">
        <div className=" w-[532px] my-16 max-md:w-full">
          <div>
            <h1 className=" w-[532px] text-neutral-800 text-4xl font-bold leading-[60.90px] max-md:w-fit max-md:text-3xl">
              Why Choose Us
            </h1>
            <p className="w-[479px] mb-6 mt-2 text-neutral-600 text-xl font-normal  leading-[27px] max-md:w-fit max-md:text-sm">
              We don't just treat ailments; we care for you with genuine warmth
              and empathy. Your well-being is our priority, and we're here to
              support you every step of the way. Choosing <span className="text-cyan-500 font-semibold">Guardian Care Clinic</span> means
              choosing a healthcare partner dedicated to elevating your
              well-being. Join us on a path to a healthier, happier you. Because
              at <span className="text-cyan-500 font-semibold">Guardian Care Clinic</span>, your health is our heartbeat.
            </p>
          </div>

          <div className=" flex gap-16 ">
            <div className="w-[50%]">
              <Button
                onClick={() => navigate(`/help`)}
                className="h-12 hover:scale-110 bg-cyan-500 rounded-md bg-sky-500/100"
                type="primary"
              >
                Explore Now{" "}
              </Button>
            </div>
          </div>
        </div>

        <div className="my-20 max-md:hidden">
          <video
            className=" flex overflow-hidden h-auto rounded-xl"
            autoPlay={true}
            loop
            muted
            playsInline
            data-video-media=""
          >
            <source
              type="video/mp4"
              src="https://storage.googleapis.com/muxriddin/_import_609d89acd35b49.00279959%20(1).mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Why;
