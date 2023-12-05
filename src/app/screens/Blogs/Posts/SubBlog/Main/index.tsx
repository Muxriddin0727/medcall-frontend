import { FC, useEffect, useState } from "react";
import {
  EyeOutlined,
  CommentOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Blog } from "../../../../../../types/blogs";
import { useAxios } from "../../../../../customHooks/useAxios";

const Main: FC<{ value: Blog }> = ({ value }) => {
  const axios = useAxios();

  const verifiedMember = JSON.parse(
    String(localStorage.getItem("member_data"))
  ) as any;
  const [liked, setLiked] = useState(
    value?.blog_likes?.includes(verifiedMember._id)
  );
  const [likesCount, setLikesCount] = useState(value?.blog_likes.length);

  const likeHandler = async () => {
    const newLikedState = !liked;
    setLiked(newLikedState);
    setLikesCount((prevCount) =>
      newLikedState ? prevCount + 1 : prevCount - 1
    );
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
      setLikesCount((prevCount) =>
        newLikedState ? prevCount - 1 : prevCount + 1
      );
      console.log("error:", error);
    }
  };

  return (
    <div className="w-2/3 m-auto p-6">
      <div className="w-full  bg-white m-auto rounded-xl">
        <h1 className="w-full m- p-2 font-bold text-3xl box-border">
          {value.blog_title}
        </h1>

        <p className="w-full m-auto py-6  box-border block ">
          {value.blog_content}
        </p>
      </div>

      <div className="w-full m-auto my-6 bg-white flex gap-8 justify-center items-center p-2 rounded-lg max-md:flex-col">
        <p className="text-gray-500 max-lg:text-sm">
          <EyeOutlined className="mr-2" />
          {value.blog_views}
        </p>
        <p className="text-gray-500 max-lg:text-sm">
          <CommentOutlined className="mr-2" />
          {value.blog_comment}
        </p>{" "}
        <div onClick={likeHandler}>
          {liked ? <HeartFilled className="text-red-500" /> : <HeartOutlined />}
          <span>{likesCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
