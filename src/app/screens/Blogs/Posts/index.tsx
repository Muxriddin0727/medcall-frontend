import { FC, useEffect, useState } from "react";
import Blogs from "./Card";
import { useAxios } from "../../../customHooks/useAxios";
import { Blog } from "../../../../types/blogs";
import { Spin } from "antd";


const Posts: FC = () => {
  const [blogData, setBlogData] = useState<[Blog] | null>(null);
  const axios = useAxios();
 

  useEffect(() => {
    axios({
      url: `/client/get-blogs`,
    }).then((data) => {
      setBlogData(data.data.data);
    });
  }, []);

  if (!blogData) {
    return (
      <div>
        <Spin size="large" />
      </div>
    );
  }
  return (
    <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      {blogData.map((value) => (
      <Blogs {...value}/>
      ))}
    </div>
  );
};

export default Posts;
