import { Card, Typography } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { FC, useState } from "react";
import { Blog } from "../../../../../types/blogs";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../../../customHooks/useAxios";


const Blogs: FC <{value: Blog}> = ({
  value
}) => {

  const axios = useAxios();
  const navigate = useNavigate();
  const verifiedMember = JSON.parse(
    String(localStorage.getItem("member_data"))
  ) as any;
  const [liked, setLiked] = useState(value?.blog_likes?.includes(verifiedMember._id));
  const [likesCount, setLikesCount] = useState(value?.blog_likes.length);
  const likeHandler = async () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    setLikesCount(prevCount => newLikedState ? prevCount + 1 : prevCount - 1);
    try {
    await axios({
      url: `/client/blog-liken`,
      method: "POST",
      body: {  
        _id: verifiedMember._id,
        blog_id: value._id,
      },
    });
  } catch (error) {
    setLiked(!newLikedState);
    setLikesCount(prevCount => newLikedState ? prevCount - 1 : prevCount + 1);
    console.log("error:", error);
  }
  }

  return (
    <Card
      actions={[
        <div>
          <EyeOutlined /> 
        </div>,
        <div>
          <CommentOutlined /> 
        </div>,
        <div
        onClick = {likeHandler}
        >
          {liked ? (
          <HeartFilled className="text-red-500"/> 
          ) : (
          <HeartOutlined />
          )}
          <span>{likesCount}</span>
        </div>,
      ]}
    >
      <h1
        onClick={() => navigate(`/blogs/${value._id}`)}
        className="text-[18px] text-bold cursor-pointer hover:underline"
      >
        {value.blog_title}
      </h1>
      <Typography spellCheck={true} className="mt-[10px] text-[12px]">
        {value.blog_description}
      </Typography>
    </Card>
  );
};

export default Blogs;
