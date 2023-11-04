import { FC } from "react";
import { Empty, Button } from "antd";

const MyAppointments: FC = () => {
 

  return (
    <div className="w-full">
      <Button
        className="ml-auto px-[15px] py-[8px]"
        
      >
        Add new
      </Button>
      <div className="pb-[11px] border-b border-[#46A35880] flex max-lg:hidden">
        <h3 className="w-[40%]">Products</h3>
        <h3 className="w-[20%]">Price</h3>
        <h3 className="w-[40%]">Total</h3>
      </div>
      <div className="flex flex-col gap-3">
       
            <Empty
              className="mt-[10px]"
              description={
                <div>
                  <h3 className="text-[18px] text-bold">No products yet...</h3>
                </div>
              }
            />
        
      </div>
    </div>
  );
};

export default MyAppointments;