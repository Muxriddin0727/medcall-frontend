import { FC, useEffect, useState } from "react";
import { Empty, Button } from "antd";
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, List, Space } from 'antd';
import { Blog } from "../../../../types/blogs";
import { useAxios } from "../../../customHooks/useAxios";
import { Appointment } from "../../../../types/others";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources ',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const MyAppointments: FC = () => {
  const [appointmentData, setAppointmentData] = useState<Appointment[]>([]); 
  const axios = useAxios();

  useEffect(() => {
    const memberData = localStorage.getItem('member_data');
    if (memberData) {
      const parsedData = JSON.parse(memberData);
      const id = parsedData._id;
      axios({
        url: `/client/get-appointments/${id}`,
      })
      .then((response) => {
        console.log(response);
        setAppointmentData(response.data.appointments);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, []);
  console.log("appointmentData", appointmentData);
 

  return (
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={appointmentData? [...appointmentData] : []}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.date}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src= "https://www.pepperconstruction.com/sites/default/files/images/community-east-hospital-teg-architects-810_3138.jpg"
          />
        }
      >
        <List.Item.Meta
          description={item.date}
        />
        {item.slots}
      </List.Item>
    )}
  />
  );
};

export default MyAppointments;