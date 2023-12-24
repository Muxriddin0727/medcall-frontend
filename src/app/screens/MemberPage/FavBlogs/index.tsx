import type { FC } from "react";
import {
  HeartFilled,
  HeartOutlined,
  EyeOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Card, Typography, Pagination, Row, Skeleton, Col, Tooltip } from "antd";
import { Blog } from "../../../../types/blogs";
import { useAxios } from "../../../customHooks/useAxios";
import { useNavigate } from "react-router-dom";
import SkeletonNode from "antd/es/skeleton/Node";
import { useReduxDispatch } from "../../../hooks";
import { setBlogCommentsModal } from "../../../redux/modalSlice";

const FavBlogs: FC = () => {
  const [blogData, setBlogData] = useState<Blog[]>([]); // initialize as empty array
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(9);
  const verifiedMember = JSON.parse(
    String(localStorage.getItem("member_data"))
  ) as any;
  const [liked, setLiked] = useState<boolean[]>([]);
  const [likesCount, setLikesCount] = useState<number[]>([]);
  const [viewsCount, setViewsCount] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const memberData = localStorage.getItem("member_data");
    if (memberData) {
      const parsedData = JSON.parse(memberData);
      const id = parsedData._id;
      axios({
        url: `/client/liked-blogs/${id}`,
      })
        .then((response) => {
          console.log(response);
          if (response.data.blogs) {
            setBlogData(response.data.blogs);
            console.log("blogData:", blogData);
            setLiked(
              response.data.blogs.map((blog: Blog) =>
                blog.blog_likes?.includes(verifiedMember._id)
              )
            );
            console.log("Response:", response);

            setLikesCount(
              response.data.blogs.map((blog: Blog) => blog.blog_likes.length)
            );

            // Set viewsCount here
            setViewsCount(
              response.data.blogs.map((blog: Blog) => blog.blog_views.length)
            );
          }
          setLoading(false);
        })

        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  if (!blogData) {
    return <SkeletonNode active />;
  }
  console.log("blogData", blogData);

  const likeHandler = async (index: number) => {
    const newLikedState = !liked[index];
    const newLiked = [...liked];
    newLiked[index] = newLikedState;
    setLiked(newLiked);
    const newLikesCount = [...likesCount];
    newLikesCount[index] = newLikedState
      ? likesCount[index] + 1
      : likesCount[index] - 1;
    setLikesCount(newLikesCount);
    try {
      await axios({
        url: `/client/blog-liken`,
        method: "POST",
        body: {
          _id: verifiedMember._id,
          blog_id: blogData[index]._id,
        },
      });
      if (!newLikedState) {
        setBlogData(blogData.filter((_, i) => i !== index));
      }
    } catch (error) {
      newLiked[index] = !newLikedState;
      setLiked(newLiked);
      newLikesCount[index] = newLikedState
        ? likesCount[index] - 1
        : likesCount[index] + 1;
      setLikesCount(newLikesCount);
      console.log("error:", error);
    }
  };

  // Calculate the blogs that should be displayed on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className=" w-4/5 m-auto ">
      <Row gutter={16}>
      {loading ? (
        Array(blogsPerPage).fill(0).map((_, index) => (
          <Col span={12} key={index}>
            <Skeleton active />
          </Col>
        ))
      ) : (
        currentBlogs.map((value, index) => (
          <Col span={12} key={value._id}>
            
            <Card
              className=" w-[90%] flex flex-col mb-8"
              bodyStyle={{flexGrow: 1}}
              actions={[
                <div>
                  <EyeOutlined />
                  <span className="ml-1">{value.blog_views.length}</span>
                </div>,
                <div>
                  <CommentOutlined
                    onClick={() =>
                      dispatch(
                        setBlogCommentsModal({
                          isOpen: true,
                          blog_id: value._id,
                        })
                      )
                    }
                  />
                </div>,
                <div onClick={() => likeHandler(index)}>
                  {liked[index] ? (
                    <HeartFilled className="text-red-500" />
                  ) : (
                    <HeartOutlined />
                  )}
                  <span className="ml-1">{likesCount[index]}</span>
                </div>,
              ]}
            >
              <h1
                onClick={() => {
                  navigate(`/blogs/${value._id}`);
                }}
                className="text-[18px] text-bold cursor-pointer hover:underline"
              >
                {value.blog_title}
              </h1>
              {value.blog_description.length > 150 ? (
        <Tooltip color="blue" placement="bottom" title={value.blog_description}>
          <p className="flex-grow mt-4 ">
            {value.blog_description.substring(0, 150)}...
          </p>
        </Tooltip>
      ) : (
        <p className="flex-grow mt-4 ">{value.blog_description}</p>
      )}
            </Card>
            
          </Col>
        ))
      )}
      </Row>
      <Pagination
        className=""
        current={currentPage}
        total={blogData.length}
        pageSize={blogsPerPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default FavBlogs;
