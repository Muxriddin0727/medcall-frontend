import { FC, useEffect, useState } from "react";
import { Spin } from "antd";
import { Blog } from "../../../../../types/blogs";
import { useAxios } from "../../../../customHooks/useAxios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const SubBlog: FC = () => {
  const { id } = useParams();
  console.log(id);
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: `/client/blogs/${id}`,
    }).then((data) => {
      setBlogData(data.data.data);
      console.log(data.data.data); // log the blogData
      console.log(data.data.data.member_data);
    });
  }, [id]);

 

  return (
    <div className="w-2/3 m-auto p-6">
      {!blogData ? (
        <div>
          <Spin size="large" />
        </div>
      ) : (
        <div className="w-full  bg-white m-auto rounded-xl">
          {blogData && blogData.member_data && <Header value={blogData.member_data} />}
          {blogData && <Main value={blogData} />}
        </div>
      )}
    </div>
  );
};

export default SubBlog;
