import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FindDoctors } from "../../../../.././../types/user";
//import { verifiedMemberData } from "../../../../../api/verify";
import {
  HeartFilled,
  HeartOutlined,
  DownOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Input, Avatar } from "antd";
import { sweetFailureProvider } from "../../../../../../lib/sweetAlert";
import { useAxios } from "../../../../../customHooks/useAxios";
import { setMemberCommentsModal } from "../../../../../redux/modalSlice";
import { useReduxDispatch } from "../../../../../hooks";
import { verifiedMemberData } from "../../../../../api/verify";
const { TextArea } = Input;

const Card: FC<{ value: FindDoctors; category: string }> = ({
  value,
  category,
}) => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const [likesCount, setLikesCount] = useState(value?.mb_likes.length);
  const [liked, setLiked] = useState(
    verifiedMemberData
      ? value?.mb_likes?.includes(verifiedMemberData._id)
      : false
  );
  const navigate = useNavigate();

  const likeHandler = async () => {
    if (!verifiedMemberData) {
      sweetFailureProvider("Please, Register First!");
      return;
    }
  
    try {
      const response = await axios({
        url: `/client/member-liken`,
        method: "POST",
        body: {
          _id: verifiedMemberData._id,
          mb_id: value._id,
        },
      });
  
      // Update the state based on the response from the backend
      if (response.data.state === 'success') {
        const newLikesCount = response.data.mb_likes.length;
        const newLikedState = response.data.mb_likes.includes(verifiedMemberData._id);
        setLikesCount(newLikesCount);
        setLiked(newLikedState);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  return (
    <div>
      <div className="group  h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
        <Avatar
          size={{ xs: 32, sm: 40, md: 64, lg: 80, xl: 300, xxl: 160 }}
          shape="square"
          src={`http://localhost:3002/${value.mb_image}`}
          alt="img"
          className=""
        />
        <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center  cursor-pointer text-[20px]">
            <CommentOutlined
              onClick={() =>
                dispatch(
                  setMemberCommentsModal({ isOpen: true, mb_id: value._id })
                )
              }
            />
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
            <span className="ml-1">{likesCount}</span>
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
      <p className="text-cyan-500 font-bold">
        {value.mb_name} {value.mb_last_name}
      </p>
    </div>
  );
};

export default Card;
