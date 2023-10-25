import type { FC } from "react";
import { Card, Button, Space, Badge, Rate } from "antd";

const TopDoctors: FC = () => {
  return (
    <div className="w-[90%] mb-[100px] m-auto">
      <div className="mb-10">
        <h1 className=" text-neutral-800 text-4xl font-bold text-center   leading-[60.90px]">
          Meet Our Top Doctors
        </h1>
        <p className=" text-neutral-600 text-xm font-normal text-center my-4  leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="  gap-6 grid grid-cols-3 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">

        <Card  className="bg-stone-100 hover:scale-110">
          <div className="flex gap-16 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-4 text-black text-[22px] font-semibold ">
                Dr.Mark
              </h1>
              <h3 className="my-2 "> Family Physician</h3>
              <p className="text-black text-opacity-75 text-[12px] font-normal ">
                Price: 30 min-30 000 UZS
              </p>
            </div>
            <div>
              <img className="w-[110px] max-h-[125px] rounded-lg" src="/doctors/nazir.jpg" alt="mark" />
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex justify-between   max-md:flex-col max-md:items-start">
              <Button className=" bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className=" bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

        <Card  className="bg-stone-100 hover:scale-110">
          <div className="flex gap-16 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-4 text-black text-[22px] font-semibold ">
                Dr.Alisa
              </h1>
              <h3 className="my-2 "> Psycholog</h3>
              <p className="text-black text-opacity-75 text-[12px] font-normal ">
                Price: 30 min-30 000 UZS
              </p>
            </div>
            <div>
              <img className="w-[110px] max-h-[125px]  rounded-lg" src="/doctors/alisa.jpg" alt="mark" />
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex justify-between max-md:flex-col max-md:items-start">
              <Button className=" bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className=" bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

        <Card  className="bg-stone-100 hover:scale-110">
          <div className="flex gap-16 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-4 text-black text-[22px] font-semibold ">
                Dr.Maryam
              </h1>
              <h3 className="my-2 "> Gynecologist</h3>
              <p className="text-black text-opacity-75 text-[12px] font-normal ">
                Price: 30 min-30 000 UZS
              </p>
            </div>
            <div>
              <img className="w-[110px] max-h-[125px] rounded-lg" src="/doctors/maryam.jpg" alt="mark" />
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex justify-between max-md:flex-col max-md:items-start">
              <Button className=" bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className=" bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

        <Card  className="bg-stone-100 hover:scale-110">
          <div className="flex gap-16 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-4 text-black text-[22px] font-semibold ">
                Dr.Mark
              </h1>
              <h3 className="my-2 "> Neurolog</h3>
              <p className="text-black text-opacity-75 text-[12px] font-normal ">
                Price: 30 min-30 000 UZS
              </p>
            </div>
            <div>
              <img className="w-[110px] max-h-[125px] rounded-lg" src="/doctors/mark.jpg" alt="mark" />
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex justify-between max-md:flex-col max-md:items-start">
              <Button className=" bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className=" bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

        <Card  className="bg-stone-100 hover:scale-110">
          <div className="flex gap-16 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-4 text-black text-[22px] font-semibold ">
                Dr.Dmitry
              </h1>
              <h3 className="my-2 "> Cardiolog</h3>
               <p className="text-black text-opacity-75 text-[12px] font-normal ">
                Price: 30 min-30 000 UZS
              </p>
            </div>
            <div>
              <img className="w-[110px] max-h-[125px] rounded-lg" src="/doctors/dmitry.jpg" alt="mark" />
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex justify-between max-md:flex-col max-md:items-start">
              <Button className=" bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className=" bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

        <Card  className="bg-stone-100 hover:scale-110">
          <div className="flex gap-16 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-4 text-black text-[22px] font-semibold ">
                Dr.David
              </h1>
              <h3 className="my-2 "> Pediatrician</h3>
              <p className="text-black text-opacity-75 text-[12px] font-normal ">
                Price: 30 min-30 000 UZS
              </p>
            </div>
            <div>
              <img className="w-[110px] max-h-[125px] rounded-lg" src="/doctors/david.jpg" alt="mark" />
            </div>
          </div>
          <div>
            <div className="my-3">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex justify-between max-md:flex-col max-md:items-start">
              <Button className=" bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className=" bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default TopDoctors;
