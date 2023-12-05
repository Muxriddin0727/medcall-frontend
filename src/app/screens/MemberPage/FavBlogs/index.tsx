import type { FC } from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Avatar, List, Space, Divider } from "antd";
import { Blog } from "../../../../types/blogs";
import { useAxios } from "../../../customHooks/useAxios";
import SkeletonNode from "antd/es/skeleton/Node";
import { useAppSearchParams } from "../../../customHooks/useSearchParams";
import { useParams } from "react-router-dom";

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description: "Cardiologist",
  content: "Benefits of sleeping well.",
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const FavBlogs: FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]); // initialize as empty array
  const axios = useAxios();

  useEffect(() => {
    const memberData = localStorage.getItem('member_data');
    if (memberData) {
      const parsedData = JSON.parse(memberData);
      const id = parsedData._id;
      axios({
        url: `/client/liked-blogs/${id}`,
      })
      .then((response) => {
        console.log(response);
        setBlogData(response.data.blogs);
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }, []);
  console.log("blogData", blogData);

  return (
    <List
      className="w-[95%]"
      itemLayout="vertical"
      size="large"
      // loading={true}  TO DO : Add loading
      grid={{ gutter: 50, }}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 12,
      }}
      dataSource={blogData ? [...blogData] : []}
      
      renderItem={(item) => (
        <List.Item
          className=""
          key={item.blog_title}
          actions={[
            <IconText
              icon={StarOutlined}
              text="156"
              key="list-vertical-star-o"
            />,
            <IconText
              icon={LikeOutlined}
              text="156"
              key="list-vertical-like-o"
            />,
            <IconText
              icon={MessageOutlined}
              text="2"
              key="list-vertical-message"
            />,
          ]}
        >
          <List.Item.Meta
            className="w-2/5 "
            // avatar={<Avatar src={item.} />}
            title={<a href={item.mb_name}>{item.blog_title} </a>}
            description={item.blog_description}
          />
          <img
            className="h-[80px] rounded-xl"
            width={272}
            alt="logo"
            src="https://i.pinimg.com/564x/6a/37/c9/6a37c9dcdaaaf2de65b8b6e0c12aa49b.jpg"
          />
          {item.blog_content}
          <Divider />
        </List.Item>
      )}
    />
  );
};

export default FavBlogs;
