import { Card, Typography } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { Blog } from "../../../../../types/blogs";
import { useNavigate } from "react-router-dom";
import { useAxios } from "../../../../customHooks/useAxios";
import { setBlogCommentsModal } from "../../../../redux/modalSlice";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks";
import { verifiedMemberData } from "../../../../api/verify";
import { sweetFailureProvider } from "../../../../../lib/sweetAlert";


const Blogs: FC<{ value: Blog }> = ({
  value
}) => {

  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(verifiedMemberData ? value?.blog_likes?.includes(verifiedMemberData._id) : false);  
  const [likesCount, setLikesCount] = useState(value?.blog_likes.length);
  const [viewsCount, setViewsCount] = useState(value?.blog_views.length);



  const likeHandler = async () => {
    if (!verifiedMemberData) {
      sweetFailureProvider("Please, Register First!");
      return
    }
    const newLikedState = !liked;
    setLiked(newLikedState);
    setLikesCount(prevCount => newLikedState ? prevCount + 1 : prevCount - 1);
    try {
      await axios({
        url: `/client/blog-liken`,
        method: "POST",
        body: {
          _id: verifiedMemberData._id,
          blog_id: value._id,
        },
      });
    } catch (error) {
      setLiked(!newLikedState);
      setLikesCount(prevCount => newLikedState ? prevCount - 1 : prevCount + 1);
      console.log("error:", error);
    }
  }

  const viewHandler = async () => {
    if (!verifiedMemberData) {
      return;
    }
    try {
      await axios({
        url: `/client/view-blog`,
        method: "POST",
        body: {
          _id: verifiedMemberData._id,
          blog_id: value._id,
        },
      });
      setViewsCount(prevCount => prevCount + 1);
    } catch (error) {
      console.log("error:", error);
    }
  }

  return (
    <Card
      actions={[
        <div>
          <EyeOutlined className="mr-1" />
          <span>{viewsCount}</span>
        </div>,
        <div>
          <CommentOutlined
            onClick={() => dispatch(setBlogCommentsModal({ isOpen: true, blog_id: value._id }))}
          />
         
        </div>,
        <div
          onClick={likeHandler}
        >
          {liked ? (
            <HeartFilled className="text-red-500" />
          ) : (
            <HeartOutlined />
          )}
          <span className="ml-1">{likesCount}</span>
        </div>,
      ]}
    >
      <h1
        onClick={() => {
          navigate(`/blogs/${value._id}`);
          viewHandler();
        }}
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
