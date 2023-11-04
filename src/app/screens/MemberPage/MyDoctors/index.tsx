import { FC } from "react";
import { Empty } from "antd";

const MyDoctors: FC = () => {
  return (
    <>
      <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 "></div>

      <div className="flex justify-center w-full">
        <Empty
          className="mt-[10px] "
          description={
            <div>
              <h3 className="text-[18px] text-bold">No wishproducts yet...</h3>
            </div>
          }
        />
      </div>

      <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 "></div>
    </>
  );
};

export default MyDoctors;
