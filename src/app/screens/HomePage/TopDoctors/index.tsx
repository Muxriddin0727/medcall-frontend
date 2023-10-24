import type { FC } from "react";
import { Card, Button, Space, Badge, Rate } from "antd";

const TopDoctors: FC = () => {
  return (
    <div className="w-[90%] h-[800px] m-auto">
      <div className="mb-10">
        <h1 className=" text-neutral-800 text-4xl font-bold text-center   leading-[60.90px]">
          Meet Our Top Doctors
        </h1>
        <p className=" text-neutral-600 text-xm font-normal text-center my-4  leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-rows-2 grid-flow-col  ">
        <Card style={{ width: 400 }} className="hover:bg-cyan-100">
          <div className="flex gap-8 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-2 text-black text-[22px] font-semibold font-['Noto Sans']">
                Dr.Mark
              </h1>
              <h3 className="my-2 mb-4"> Pediatrician</h3>
              <h4 className="text-black text-opacity-75 text-xs font-normal font-['Noto Sans']">
                Reception price: 30 min - 60 000 UZS
              </h4>
            </div>
            <div>
              <img className="w-[110px]" src="/doctors/mark.jpg" alt="mark" />
            </div>
          </div>

          <div>
            <div className="my-2">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex gap-12">
              <Button className="w-[120px] bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className="w-[180px] bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>
        <Card style={{ width: 400 }} className="hover:bg-cyan-100">
          <div className="flex gap-8 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-2 text-black text-[22px] font-semibold font-['Noto Sans']">
                Dr.Mark
              </h1>
              <h3 className="my-2 mb-4"> Pediatrician</h3>
              <h4 className="text-black text-opacity-75 text-xs font-normal font-['Noto Sans']">
                Reception price: 30 min - 60 000 UZS
              </h4>
            </div>
            <div>
              <img className="w-[110px]" src="/doctors/mark.jpg" alt="mark" />
            </div>
          </div>

          <div>
            <div className="my-2">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex gap-12">
              <Button className="w-[120px] bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className="w-[180px] bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>
        <Card style={{ width: 400, height: 250 }} className="hover:bg-cyan-100">
          <div className="flex gap-8 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-2 text-black text-[22px] font-semibold font-['Noto Sans']">
                Dr.Mark
              </h1>
              <h3 className="my-2 mb-4"> Pediatrician</h3>
              <h4 className="text-black text-opacity-75 text-xs font-normal font-['Noto Sans']">
                Reception price: 30 min - 60 000 UZS
              </h4>
            </div>
            <div>
              <img className="w-[110px]" src="/doctors/mark.jpg" alt="mark" />
            </div>
          </div>

          <div>
            <div className="my-2">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex gap-12">
              <Button className="w-[120px] bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className="w-[180px] bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

        <Card style={{ width: 400, height: 250 }} className="hover:bg-cyan-100">
          <div className="flex gap-8 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-2 text-black text-[22px] font-semibold font-['Noto Sans']">
                Dr.Mark
              </h1>
              <h3 className="my-2 mb-4"> Pediatrician</h3>
              <h4 className="text-black text-opacity-75 text-xs font-normal font-['Noto Sans']">
                price: 30 min - 60 000 UZS
              </h4>
            </div>
            <div>
              <img className="w-[110px]" src="/doctors/mark.jpg" alt="mark" />
            </div>
          </div>

          <div>
            <div className="my-2">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex gap-12">
              <Button className="w-[120px] bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className="w-[180px] bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>

        <Card style={{ width: 400, height: 250 }} className="hover:bg-cyan-100">
          <div className="flex gap-8 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-2 text-black text-[22px] font-semibold font-['Noto Sans']">
                Dr.Mark
              </h1>
              <h3 className="my-2 mb-4"> Pediatrician</h3>
              <h4 className="text-black text-opacity-75 text-xs font-normal font-['Noto Sans']">
                Reception price: 30 min - 60 000 UZS
              </h4>
            </div>
            <div>
              <img className="w-[110px]" src="/doctors/mark.jpg" alt="mark" />
            </div>
          </div>

          <div>
            <div className="my-2">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex gap-12">
              <Button className="w-[120px] bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className="w-[180px] bg-sky-500/100" type="primary">
                Book an Appointment
              </Button>
            </Space>
          </div>
        </Card>
        <Card style={{ width: 400, height: 250 }} className="hover:bg-cyan-100">
          <div className="flex gap-8 mb-4">
            <div className="flex-col ">
              <Space>
                <Badge text="Available" color="#f50" />
              </Space>
              <h1 className=" my-2 text-black text-[22px] font-semibold font-['Noto Sans']">
                Dr.Mark
              </h1>
              <h3 className="my-2 mb-4"> Pediatrician</h3>
              <h4 className="text-black text-opacity-75 text-xs font-normal font-['Noto Sans']">
                Reception price: 30 min - 60 000 UZS
              </h4>
            </div>
            <div>
              <img className="w-[110px]" src="/doctors/mark.jpg" alt="mark" />
            </div>
          </div>

          <div>
            <div className="my-2">
              <Rate allowHalf defaultValue={2.5} />
            </div>
            <Space className="flex gap-12">
              <Button className="w-[120px] bg-sky-500/100 " type="primary">
                Message
              </Button>
              <Button className="w-[180px] bg-sky-500/100" type="primary">
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
