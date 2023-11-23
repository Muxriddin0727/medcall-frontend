import { Card, Typography } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Blog } from "../../../../../types/blogs";
import { useNavigate } from "react-router-dom";


const Blogs: FC <Blog> = ({
  blog_views,
  blog_comment, 
  blog_likes,
  blog_title, 
  blog_description,
  _id
}) => {

  const navigate = useNavigate();
 

  return (
    <Card
      actions={[
        <div>
          <EyeOutlined /> {blog_views}
        </div>,
        <div>
          <CommentOutlined /> {blog_comment}
        </div>,
        <div>
          <HeartOutlined /> {blog_likes}
        </div>,
      ]}
    >
      <h1
        onClick={() => navigate(`/blogs/${_id}`)}
        className="text-[18px] text-bold cursor-pointer hover:underline"
      >
        {blog_title}
      </h1>
      <Typography spellCheck={true} className="mt-[10px] text-[12px]">
        {blog_description}
      </Typography>
    </Card>
  );
};

export default Blogs;
