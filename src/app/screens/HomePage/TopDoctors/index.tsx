import { useState, type FC, useEffect } from "react";
import { Card, Button, Space, Badge, Rate } from "antd";
import { FindDoctors } from "../../../../types/user";
import { useAxios } from "../../../customHooks/useAxios";

const TopDoctors: FC = () => {
  const [doctorsData, setTopDoctors] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: "/client/top-doctors",
    })
      .then((data) => {
        setTopDoctors(data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching top doctors: ", error);
      });
  }, []);

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
        {doctorsData?.map((value: FindDoctors) => (
          <Card key={value._id} className="bg-stone-100 hover:scale-110">
            <div className="flex gap-16 mb-4">
              <div className="flex-col">
                <Space>
                  <Badge text={value.mb_status} color="#f50" />
                </Space>
                <h1 className=" my-4 text-black text-[22px] font-semibold ">
                  {value.mb_name}
                </h1>
                <h3 className="my-2 "> {value.mb_profession}</h3>
                <p className="text-black text-opacity-75 text-[12px] font-normal ">
                  {value.mb_price}
                </p>
              </div>
              <div>
                <img
                  className="w-[110px] max-h-[125px] rounded-lg"
                  src={`http://localhost:3002/${value.mb_image}`}
                  alt="doctor"
                />
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
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
