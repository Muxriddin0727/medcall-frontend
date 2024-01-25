import { FC, useEffect, useState } from "react";
import { PushpinFilled, EnvironmentFilled } from "@ant-design/icons";
import React from "react";
import { Avatar, List, Space, Skeleton } from "antd";
import { Blog } from "../../../../types/blogs";
import { useAxios } from "../../../customHooks/useAxios";
import { Appointment } from "../../../../types/others";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MyAppointments: FC = () => {
  const [appointmentData, setAppointmentData] = useState<Appointment[]>([]);
  const axios = useAxios();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const memberData = localStorage.getItem("member_data");
    if (memberData) {
      const parsedData = JSON.parse(memberData);
      const id = parsedData._id;
      axios({
        url: `/client/get-appointments/${id}`,
      })
        .then((response) => {
          console.log(response);
          setAppointmentData(response.data.appointment_data);

          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  console.log("appointmentData", appointmentData);

  return (
    <div className="flex justify-center">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={appointmentData || []}

        renderItem={(item: Appointment) => {
          if (!item) {
             return null;
          }

          return loading ? (
            <Skeleton active />
          ) : (
            item.slots &&
            item.slots.length > 0 && (
              <List.Item
                key={item.date}
                actions={[
                  <div className="flex flex-col  space-y-[-20px] ">
                    <IconText
                      icon={PushpinFilled}
                      text="Office Hours: 8.00 - 19.30"
                      key="list-vertical-star-o"
                    />
                    ,
                    <IconText
                      icon={EnvironmentFilled}
                      text="101 DAEHAK-RO JONGNO-GU, SEOUL  (서울시 종로구 대학로 101, 연건동)"
                      key="list-vertical-like-o"
                    />
                    ,
                  </div>,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://www.pepperconstruction.com/sites/default/files/images/community-east-hospital-teg-architects-810_3138.jpg"
                  />
                }
              >
                <List.Item.Meta />
                {item.slots.map((slot, index) => (
                  <div key={index} className="flex flex-col gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <Avatar
                        className="flex hover:scale-150"
                        size="large"
                        src={`http://46.28.44.182:3002/${slot.doctorImg}`}
                      />
                      <p className="font-semibold text-ccyan-500">
                        Dr. {slot.doctorName}{" "}
                        {slot.doctorLastname}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                      <p>
                        <span className="font-semibold">Appointment Date:</span>{" "}
                        {item.date}
                      </p>
                      <p>
                        <span className="font-semibold">Appointment Time:</span>{" "}
                        {slot.start} - {slot.end}
                      </p>
                    </div>
                  </div>
                ))}
              </List.Item>
            )
          )
        }}
      />
    </div>
  );
};

export default MyAppointments;
