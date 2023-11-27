import type {FC}  from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, List, Space, Divider } from 'antd';
const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description:
      'Cardiologist',
    content:
      'Benefits of sleeping well.',
  }));
  
  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  




const FavBlogs: FC = () => {
  
  
    return (
        <List className="w-[95%]"
        itemLayout="vertical"
        size="large"
        // loading={true}  TO DO : Add loading
        grid={{ gutter: 50, column: 3 }}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 12,
        }}
        dataSource={data}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={(item) => (
<List.Item className=""
  key={item.title}
  actions={[
    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
  ]}
>
  <List.Item.Meta className=""
    avatar={<Avatar src={item.avatar} />}
    title={<a href={item.href}>{item.title} </a> }
    description={item.description}
  />
  <img className="h-[80px] rounded-xl"
    width={272}
    alt="logo"
    src="https://i.pinimg.com/564x/6a/37/c9/6a37c9dcdaaaf2de65b8b6e0c12aa49b.jpg"
  />
  {item.content}
  <Divider/>
</List.Item>
        )}
      />
    
       
)};

export default FavBlogs;