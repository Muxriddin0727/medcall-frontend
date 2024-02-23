import { useState, type FC, useEffect, useContext } from "react";
import { Rate, Tooltip } from "antd";
import { useAxios } from "../../../customHooks/useAxios";
import { Comment } from "../../../../types/others";
import { FindDoctors } from "../../../../types/user";
import { useMemberData } from "../../../context/MemberDataContext";

const Feedbacks: FC = () => {
  const axios = useAxios();
  const { verifiedMemberData, setVerifiedMemberData } = useMemberData();
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios({
          url: `/client/member-comment-home`,
          method: "GET",
        });
        setComments(response.data.comments);
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="w-full m-auto mb-[100px] bg-stone-100 ">
      <div className="w-[90%] m-auto py-14 ">
        <h1 className=" text-neutral-800 text-4xl font-bold text-center   leading-[60.90px]">
          What People Say
        </h1>
        <p className=" text-neutral-600 text-xm font-normal text-center   leading-[27px]">
          These heartfelt testimonials reflect the impact of our dedicated team
          and personalized care on their well-being.
        </p>
      </div>
      <div className="w-[90%] justify-center m-auto mt-2 pb-20 grid md:grid-cols-1 lg:grid-cols-3 gap-12">
        {comments.map((comment: Comment, index: number) => (
          <div
            key={index}
            className="rounded-md  w-fit min-w-[360px] h-auto min-h-[220px] m-auto p-4 bg-white flex flex-col justify-between items-start"
          >
            <div>
              {comment.comment_content.length > 200 ? (
                <Tooltip
                  color="blue"
                  placement="bottom"
                  title={comment.comment_content}
                >
                  <p className="px-4 italic">
                    {comment.comment_content.substring(0, 200)}...
                  </p>
                </Tooltip>
              ) : (
                <p className="px-4 italic">{comment.comment_content}</p>
              )}
            </div>
            <div className="flex gap-4  ">
              <img
                className="w-10 m-auto rounded-full"
                src={
                  comment.mb_image ||
                  "/icons/default_user.png"
                }
                alt="user.img"
              />

              <div className="mt-2">
                <h2 className=" text-center text-neutral-800 text-x font-medium ">
                  {comment.mb_name}
                </h2>
                <h2 className=" text-center text-neutral-800 text-xs font-medium ">
                  (Patient)
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
