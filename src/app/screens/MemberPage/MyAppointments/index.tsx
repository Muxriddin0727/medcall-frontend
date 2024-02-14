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
          setLoading(false);
        });
    }else {
      setLoading(false);
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
  renderItem={(item) => (
    loading ? (
      <Skeleton active />
    ) : (
      item.slots && item.slots.length > 0 && (
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
          {item.slots.map(
            (
              slot,
              index // check if item.slots is defined before calling .map()
            ) => (
              <div key={index} className="flex flex-col gap-4 mb-6">
                <Avatar
                  size= "large"
                  src={`http://46.28.44.182:3002/${slot.doctorImg}`}
                />
                <p>
                  With: Dr. {slot.doctorName} {slot.doctorLastname}
                </p>
                <p>Appointment Date: {item.date}</p>
                <p>
                  Appointment Time: {slot.start} - {slot.end}
                </p>
              </div>
            )
          )}
        </List.Item>
      )
    )
  )}
/>
</div>
  );
};

export default MyAppointments;