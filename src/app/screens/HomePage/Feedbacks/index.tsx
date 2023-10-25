import type { FC } from "react";
import { Rate } from "antd";

const Feedbacks: FC = () => {
  return (
    <div className="w-full m-auto mb-[100px] bg-stone-50 ">
      <div className="w-[90%] m-auto py-14 ">
        <h1 className=" text-neutral-800 text-4xl font-bold text-center   leading-[60.90px]">
          What People Say
        </h1>
        <p className=" text-neutral-600 text-xm font-normal text-center my-4  leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      <div className="w-[90%] m-auto pb-20  grid grid-cols-3 gap-12  ">
        <div className="relative  m-auto  bg-white  p-[10px] flex flex-col items-center" >
          <img
            className="absolute w-36 h-36 m-auto rounded-full top-[-50px]  "
            src="/images/william.png"
            alt="william"
          />
          <div>
            <h2 className=" text-center text-neutral-800 text-2xl font-medium mt-24">
              William Sons
            </h2>
          </div>
          <div className="w-fit m-auto">
            <Rate className=" h-4 " allowHalf defaultValue={2.5} />
          </div>
          <div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, morbi dictum. Nec enim mauris velit
              integer. Vitae varius interdum enim eget elementum. Eu velit
              tortor proin risus amet habitant.
            </p>
          </div>
        </div>

        <div className="relative  m-auto bg-white  p-[10px] flex flex-col items-center">
          <img
            className=" absolute w-36 h-36 m-auto rounded-full   top-[-50px]"
            src="/images/farhad.png"
          />
          <div>
            <h2 className=" text-center text-neutral-800 text-2xl font-medium mt-24">
              William Sons
            </h2>
          </div>
          <div className="w-fit m-auto">
            <Rate className=" h-4  " allowHalf defaultValue={2.5} />
          </div>
          <div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, morbi dictum. Nec enim mauris velit
              integer. Vitae varius interdum enim eget elementum. Eu velit
              tortor proin risus amet habitant.
            </p>
          </div>
        </div>
        <div className="relative  m-auto bg-white p-[10px] flex flex-col items-center">
          <img
            className=" absolute w-36 h-36 m-auto rounded-full top-[-50px] "
            src="/images/peter.png"
          />
          <div>
            <h2 className=" text-center text-neutral-800 text-2xl font-medium mt-24">
              William Sons
            </h2>
          </div>
          <div className="w-fit m-auto">
            <Rate className=" h-4  " allowHalf defaultValue={2.5} />
          </div>
          <div>
            <p className="px-4">
              Lorem ipsum dolor sit amet, morbi dictum. Nec enim mauris velit
              integer. Vitae varius interdum enim eget elementum. Eu velit
              tortor proin risus amet habitant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
