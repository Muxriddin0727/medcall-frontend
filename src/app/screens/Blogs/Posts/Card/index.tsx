import { Card, Typography } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { Blog } from "../../../../../types/blogs";
import { useNavigate, useParams } from "react-router-dom";
import { blog_data } from "../../../../../lib";
import { useAxios } from "../../../../customHooks/useAxios";
import { Spin } from "antd";

const Blogs: FC = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: `/client/blogs/${id}`,
    }).then((data) => {
      setBlogData(data.data.data);
    });
  }, [id]);

  if (!blogData) {
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Card
      actions={[
        <div>
          <EyeOutlined /> {blogData.blog_views}
        </div>,
        <div>
          <CommentOutlined /> {blogData.blog_comment.length}
        </div>,
        <div>
          <HeartOutlined /> {blogData.blog_likes}
        </div>,
      ]}
    >
      <h1
        onClick={() => navigate("/blogs/:id")}
        className="text-[18px] text-bold cursor-pointer hover:underline"
      >
        {blogData.blog_subject}
      </h1>
      <Typography spellCheck={true} className="mt-[10px] text-[12px]">
        {blogData.blog_description}
      </Typography>
    </Card>
  );
};

export default Blogs;
