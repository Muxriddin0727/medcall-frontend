import { FC, useEffect, useState } from "react";
import { Spin } from "antd";
import { Blog } from "../../../../../types/blogs";
import { useAxios } from "../../../../customHooks/useAxios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import { FindDoctors } from "../../../../../types/user";

const SubBlog: FC = () => {
  const { id } = useParams();
  console.log(id);
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const [authorData, setAuthorData] = useState<FindDoctors | null>(null); // [1
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: `/client/blogs/${id}/with-author`,
    }).then((data) => {
      if (data.data.data) {
        setBlogData(data.data.data);
        setAuthorData(data.data.data.author);
      } else {
        console.error("No data received from the server");
      }
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
          {authorData &&  <Header value={authorData} />}
          {blogData && <Main value={blogData} />}
        </div>
      )}
    </div>
  );
};

export default SubBlog;
