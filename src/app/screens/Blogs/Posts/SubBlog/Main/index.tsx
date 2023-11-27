import { FC } from "react";
import { EyeOutlined, CommentOutlined, HeartOutlined } from "@ant-design/icons";
import { Blog } from "../../../../../../types/blogs";

const Main: FC<{ value: Blog }> = ({ value }) => {
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
        <p className="text-gray-500 max-lg:text-sm">
          <HeartOutlined className="mr-2" />
          {value.blog_likes}
        </p>{" "}
      </div>
    </div>
  );
};

export default Main;
