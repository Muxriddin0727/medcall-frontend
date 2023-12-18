import { Card, Typography } from "antd";
import { EyeOutlined, CommentOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import { Blog } from "../../../../../types/blogs";
import { useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../../../../customHooks/useAxios";
import { setBlogCommentsModal } from "../../../../redux/modalSlice";
import { useReduxDispatch } from "../../../../hooks";
import { verifiedMemberData } from "../../../../api/verify";
import { sweetFailureProvider } from "../../../../../lib/sweetAlert";

const Blogs: FC = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [liked, setLiked] = useState<{ [key: string]: boolean }>({});
  const [likesCount, setLikesCount] = useState<{ [key: string]: number }>({});
  const [viewsCount, setViewsCount] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    axios({
      url: `/client/get-doctor-blogs/${id}`,
      method: "GET",
    })
      .then((response) => {
        console.log('Response data:', response.data);
        setBlogs(response.data.data);
        const initialLiked: { [key: string]: boolean } = {};
        const initialLikesCount: { [key: string]: number } = {};
        const initialViewsCount: { [key: string]: number } = {};
        response.data.data.forEach((blog: Blog) => {
          initialLiked[blog._id] = blog.blog_likes.includes(verifiedMemberData._id);
          initialLikesCount[blog._id] = blog.blog_likes.length;
          initialViewsCount[blog._id] = blog.blog_views.length;
        });
        setLiked(initialLiked);
        setLikesCount(initialLikesCount);
        setViewsCount(initialViewsCount);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  return (
    <>
      {blogs.map((value, index) => {
        const likeHandler = async () => {
          if (!verifiedMemberData) {
            sweetFailureProvider("Please, Register First!");
            return;
          }
          const newLikedState = !liked[value._id];
          setLiked(prevLiked => ({ ...prevLiked, [value._id]: newLikedState }));
          setLikesCount(prevLikesCount => ({ ...prevLikesCount, [value._id]: prevLikesCount[value._id] + (newLikedState ? 1 : -1) }));
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
            setLiked(prevLiked => ({ ...prevLiked, [value._id]: !newLikedState }));
            setLikesCount(prevLikesCount => ({ ...prevLikesCount, [value._id]: prevLikesCount[value._id] + (!newLikedState ? 1 : -1) }));
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
            setViewsCount(prevViewsCount => ({ ...prevViewsCount, [value._id]: prevViewsCount[value._id] + 1 }));
          } catch (error) {
            console.log("error:", error);
          }
        }

        return (
          <Card
          key = {value._id}
            actions={[
              <div>
                <EyeOutlined className="mr-1" />
                <span>{viewsCount[value._id]}</span>
              </div>,
              <div>
                <CommentOutlined
                  onClick={() => dispatch(setBlogCommentsModal({ isOpen: true, blog_id: value._id }))}
                />
              </div>,
              <div
                onClick={likeHandler}
              >
                {liked[value._id] ? (
                  <HeartFilled className="text-red-500" />
                ) : (
                  <HeartOutlined />
                )}
                <span className="ml-1">{likesCount[value._id]}</span>
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
        })}
      </>
    );
  };
  
  export default Blogs;