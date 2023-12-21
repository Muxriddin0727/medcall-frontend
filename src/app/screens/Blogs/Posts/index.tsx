import { FC, useEffect, useState } from "react";
import Blogs from "./Card";
import { useAxios } from "../../../customHooks/useAxios";
import { Blog } from "../../../../types/blogs";
import { Pagination, Skeleton } from "antd";

const Posts: FC = () => {
  const [blogData, setBlogData] = useState<[Blog] | null>(null);
  const axios = useAxios();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  useEffect(() => {
    axios({
      url: `/client/blogs`,
    }).then((data) => {
      setBlogData(data.data.data);
    });
  }, []);

  if (!blogData) {
    return <Skeleton className="m-8" paragraph active />;
  }
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  return (
    <div>
      <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
        {currentBlogs.map((value) => (
          <Blogs value={value} key={value._id} />
        ))}
      </div>
      <Pagination
      className="flex justify-center my-6"
        current={currentPage}
        total={blogData.length}
        pageSize={blogsPerPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default Posts;
