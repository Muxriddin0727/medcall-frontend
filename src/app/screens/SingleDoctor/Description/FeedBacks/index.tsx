import { FC, useEffect, useState } from "react";
import { useAxios } from "../../../../customHooks/useAxios";
import { Comment } from "../../../../../types/others";
import { Card, Tooltip, Empty } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { verifiedMemberData } from "../../../../api/verify";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { sweetErrorHandling } from "../../../../../lib/sweetAlert";

const { Meta } = Card;

const Feedbacks: FC<{ mb_id: string }> = ({ mb_id }) => {
  const axios = useAxios();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (!verifiedMemberData) {
      sweetErrorHandling("Please login or register first");
      return;
    }
    const fetchComments = async () => {
      try {
        const response = await axios({
          url: `/client/member-comments/${mb_id}`,
          method: "GET",
        });
        console.log("Response:", response.data); // Log the response data
        setComments(response.data.comments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="my-16">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <SwiperSlide
              key={index}
              className="bg-center bg-cover bg-slate-50 p-2 mt-12 w-[400px] h-auto "
            >
              <p className="text-end text-gray-400">
                {new Date(comment.posted_at).toLocaleDateString()}
              </p>

              <div className="relative   bg-white p-[10px] flex flex-col items-center">
                <img
                  className=" absolute w-24 h-24 top-1 rounded-full  "
                  src={
                    comment.mb_image
                      ? comment.mb_image
                      : "/icons/default_user.png"
                  }
                />
                <div>
                  <h2 className=" text-center text-neutral-800 text-2xl font-medium mt-24 mb-2">
                    {comment.mb_name}
                  </h2>
                </div>

                <div>
                  {comment.comment_content.length > 200 ? (
                    <Tooltip
                      color="blue"
                      placement="bottomLeft"
                      title={comment.comment_content}
                    >
                      <p className="px-4">
                        {comment.comment_content.substring(0, 200)}...
                      </p>
                    </Tooltip>
                  ) : (
                    <p className="px-4">{comment.comment_content}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <Empty className="my-20" description="No Feedbacks Available" />
        )}
      </Swiper>
    </div>
  );
};

export default Feedbacks;
