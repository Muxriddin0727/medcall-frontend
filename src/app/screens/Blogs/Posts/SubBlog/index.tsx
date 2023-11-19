import { FC, useEffect, useState } from "react";
import { Spin } from "antd";
import { Blog } from "../../../../../types/blogs";
import { FindDoctors } from "../../../../../types/user";
import { useAxios } from "../../../../customHooks/useAxios";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

const SubBlog: FC = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState<Blog | null>(null);
  const [authorData, setAuthorData] = useState<FindDoctors | null>(null); 
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: `/client/get-blogs/${id}`,
    }).then((data) => {
      setBlogData(data.data.data);
    });
  }, [id]);
 
  useEffect(() => { //
    if (blogData) {
      axios({
        url: `/client//get-blogs-author/${id}`,
      }).then((data) => {
        setAuthorData(data.data.data);
      });
    }
  }, [blogData, id]);

  
  return (
    <div className="w-2/3 m-auto p-6">
      {!blogData ? (
        <div>
          <Spin size="large" />
        </div>
      ) : (
      <div className="w-full  bg-white m-auto rounded-xl">
        {authorData && <Header value={authorData} />}
        {blogData && <Main value={blogData} />}
      </div>
      )}

    </div>
  );
};

export default SubBlog;
