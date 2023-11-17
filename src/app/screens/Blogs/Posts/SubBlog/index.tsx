import { FC, useEffect, useState } from "react";
import {
  EyeOutlined,
  CommentOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Spin } from "antd";
import { Blog } from "../../../../../types/blogs";

import { useAxios } from "../../../../customHooks/useAxios";
import { useParams } from "react-router-dom";

const SubBlog: FC = () => {

  const {id} = useParams();
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: `/client/blogs/${id}`,
    }).then((data) => {
      setBlogData(data.data.data);
    });
  }, [id, axios]);
  if (!blogData) {
    return <div><Spin size="large" /></div>;
  }
  return (
    <div className="w-2/3 m-auto p-6">
     
      <div className="w-full  bg-white m-auto rounded-xl">
        <div className="w-full m-auto my-8 grid justify-between grid-flow-col ">
          <div className=" flex gap-6">
            <Avatar size={72} icon={<UserOutlined />} />
            <div className="">
              <h2 className="text-center font-bold text-xl">
                {blogData._id} {blogData.mb_last_name}
              </h2>
              <p className=" text-gray-500">{blogData.mb_follow_cnt}</p>
            </div>
          </div>
          <Button className=" m-auto my-6 bg-cyan-500 " type="primary">
            Follow
          </Button>
        </div>

        <h1 className="w-full m- p-2 font-bold text-3xl box-border">
          {blogData.blog_subject}
        </h1>

        <p className="w-full m-auto py-6  box-border block ">
          {blogData.blog_content}
        </p>
      </div>

      <div className="w-full m-auto my-6 bg-white flex gap-8 justify-center items-center p-2 rounded-lg max-md:flex-col">
        <p className="text-gray-500 max-lg:text-sm">
          <EyeOutlined className="mr-2" />
          {blogData.blog_views}
        </p>
        <p className="text-gray-500 max-lg:text-sm">
          <CommentOutlined className="mr-2" />
          {blogData.blog_comment.length}
        </p>{" "}
        <p className="text-gray-500 max-lg:text-sm">
          <HeartOutlined className="mr-2" />
          {blogData.blog_likes}
        </p>{" "}
      </div>
    </div>
  );
};

export default SubBlog;
