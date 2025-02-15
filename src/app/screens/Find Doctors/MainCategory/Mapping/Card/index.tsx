import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FindDoctors } from "../../../../.././../types/user";
//import { verifiedMemberData } from "../../../../../api/verify";
import {
  HeartFilled,
  HeartOutlined,
  WechatOutlined,
  DownOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Popover, Input } from "antd";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../../../../lib/sweetAlert";
import { useAxios } from "../../../../../customHooks/useAxios";
const { TextArea } = Input;

const Card: FC<{ value: FindDoctors; category: string }> = ({
  value,
  category,
}) => {
  const axios = useAxios();

  const verifiedMember = JSON.parse(
    String(localStorage.getItem("member_data"))
  ) as any;
  const [liked, setLiked] = useState(
    value?.mb_likes?.includes(verifiedMember._id)
  );
  type Comment = {
    _id: any;
    text: string;
    mb_name: any;
  };
  const [commented, setCommented] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");
  const [popoverVisible, setPopoverVisible] = useState(false);

  const navigate = useNavigate();

  const commentHandler = async () => {
    try {
      if (commentText.trim() !== "") {
        const newComment = {
          _id: verifiedMember._id,
          text: commentText,
          mb_name: verifiedMember.mb_name, // add this line
        };
        setCommented([...commented, newComment]);
        await axios({
          url: `/client/member-comment`,
          method: "POST",
          body: {
            _id: verifiedMember._id,
            mb_id: value._id,
            comment: newComment,
          },
        });

        setCommentText("");
      }
    } catch (error) {
      sweetErrorHandling(
        new Error("Something went wrong with commenting"),
        false
      );
      console.error("error:", error);
    }
  };

  const likeHandler = async () => {
    setLiked(!liked);
    try {
      await axios({
        url: `/client/member-liken`,
        method: "POST",
        body: {
          _id: verifiedMember._id,
          mb_id: value._id,
        },
      });
    } catch (error) {
      setLiked(!liked);
      console.log("error:", error);
    }
  };

  return (
    <div>
      <div className="group  h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        <img
          width={180}
          src={`http://localhost:3002/${value.mb_image}`}
          alt="img"
          className=""
        />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <Popover
              open={popoverVisible}
              onOpenChange={(visible) => setPopoverVisible(visible)}
              content={
                <div className="flex">
                  <TextArea
                    allowClear
                    placeholder="Leave your feedbacks..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <SendOutlined
                    onClick={commentHandler}
                    style={{
                      fontSize: "20px",
                      marginLeft: "10px",
                      cursor: "pointer",
                    }}
                  />
                  {commented.map((comment, index) => (
                    <div key={index}>
                      
                      <p>{comment.text}</p>
                      <p>{comment.mb_name}</p>
                    </div>
                  ))}
                </div>
              }
              title="Feedbacks"
              trigger="click"
            >
              <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
                <WechatOutlined />
              </div>
            </Popover>
          </div>
          <div
            onClick={likeHandler}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]"
          >
            {liked ? (
              <HeartFilled className="text-red-500" />
            ) : (
              <HeartOutlined />
            )}
          </div>
          <div
            onClick={() => navigate(`/single-doctor/${category}/${value._id}`)}
            className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]"
          >
            <DownOutlined />
          </div>
        </div>
      </div>
      <h3 className="font-normal cursor-pointer mt-[12px]">
        {value.mb_profession}
      </h3>
      <p className="text-[#46A358] font-bold">
        30 min - 25 000 UZS
        <span className="font-thin text-[#A5A5A5] ml-[5px] line-through">
          {value.mb_price}
        </span>
      </p>
    </div>
  );
};

export default Card;
