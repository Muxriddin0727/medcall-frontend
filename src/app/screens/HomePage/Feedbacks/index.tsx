import { useState, type FC, useEffect, useContext } from "react";
import { Rate } from "antd";
import { useAxios } from "../../../customHooks/useAxios";
import { Comment } from "../../../../types/others";
import { FindDoctors } from "../../../../types/user";
import { useMemberData } from "../../../context/MemberDataContext";

const Feedbacks: FC= () => {
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
        <p className=" text-neutral-600 text-xm font-normal text-center my-4  leading-[27px]">
          Lorem ipsum dolor sit amet, consectetur
        </p>
      </div>

      <div className="w-[90%] m-auto pb-20  grid grid-cols-3 gap-12  ">
        {comments.map((comment: Comment, index: number) => (
          <div key ={index} className="relative w-[350px] h-[280px] m-auto  bg-white   flex flex-col items-center">
            <img
              className="absolute w-36 h-36 m-auto rounded-full top-[-50px]  "
              src={comment.mb_image ? `http://localhost:3002/${comment.mb_image}` : "/icons/default_user.png"}

              alt="william"
            />
            <div>
              <h2 className=" text-center text-neutral-800 text-2xl font-medium mt-24">
                {comment.mb_name}
              </h2>
            </div>
            <div className="w-fit m-auto mt-[-1px]">
              <Rate  allowHalf defaultValue={2.5} />
            </div>
            <div>
              <p className="px-4 mt-[-120px]">{comment.comment_content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
