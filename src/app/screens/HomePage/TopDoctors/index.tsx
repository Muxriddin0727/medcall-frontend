import { useState, type FC, useEffect } from "react";
import { Skeleton, Avatar } from "antd";
import { FindDoctors } from "../../../../types/user";
import { useAxios } from "../../../customHooks/useAxios";
import { useReduxDispatch } from "../../../hooks";
import { setBookModal } from "../../../redux/modalSlice";
import { useNavigate } from "react-router-dom";
import {
  HeartOutlined,
  HeartFilled,
  CommentOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { verifiedMemberData } from "../../../api/verify";
import { sweetErrorHandling } from "../../../../lib/sweetAlert";
import { setMemberCommentsModal } from "../../../redux/modalSlice";

const TopDoctors: FC<{ category: string }> = ({ category }) => {
  const [topdoctors, setTopDoctors] = useState<FindDoctors[]>([]);
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [likedDoctors, setLikedDoctors] = useState<{ [key: string]: boolean }>(
    {}
  );
  

  const likeHandler = async (value: FindDoctors) => {
    if (!verifiedMemberData) {
      sweetErrorHandling("Please login or register first");
      return;
    }
    const currentlyLiked = likedDoctors[value._id] || false;
    setLikedDoctors({ ...likedDoctors, [value._id]: !currentlyLiked });
    try {
      await axios({
        url: `/client/member-liken`,
        method: "POST",
        body: {
          _id: verifiedMemberData._id,
          mb_id: value._id,
        },
      });
    } catch (error) {
      sweetErrorHandling("Please login or register first");
      setLikedDoctors({ ...likedDoctors, [value._id]: currentlyLiked }); // revert like status on error
      console.log("error:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios({
      url: "/client/top-doctors",
    })
      .then((response) => {
        setTopDoctors(response.data.data);
        // Initialize liked status for each doctor
        const initialLikes = response.data.data.reduce((acc: { [key: string]: boolean }, doctor: FindDoctors) => {
          acc[doctor._id] = verifiedMemberData
            ? doctor.mb_likes?.includes(verifiedMemberData._id) || false
            : false;
          return acc;
        }, {});
        setLikedDoctors(initialLikes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching top doctors: ", error);
      });
  }, []); 

  return (
    <div className="mb-24 w-full m-auto">
      <h1 className=" text-neutral-800 text-4xl font-bold text-center leading-[60.90px]">
        Meet Our Top Doctors
      </h1>
      <p className=" text-neutral-600 text-xm font-normal text-center my-4 leading-[24px]">
      Make us your home for health care
      </p>
      <div className="grid grid-cols-4 grid-flow-row gap-6 my-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {loading ? (
        Array(4).fill(0).map((_, index) => (
          <Skeleton  key={index} active paragraph={{ rows: 4 }} />
        ))
      ) : (
        topdoctors.map((value: FindDoctors) => {
       

          return (
            <div key={value._id}>
              <div className="group w-[300px] h-[300px] bg-[#f5f5f5] flex justify-center items-center relative">
                <Avatar
                  size={{
                    xs: 200,
                    sm: 300,
                    md: 300,
                    lg: 300,
                    xl: 300,
                    xxl: 300,
                  }}
                  shape="square"
                  src={`http://localhost:3002/${value.mb_image}`}
                  alt="img"
                  className=""
                />
                <div className="hidden absolute inset-x-auto bottom-2 gap-4 group-hover:flex">
                  <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
                    <CommentOutlined
                      onClick={() =>
                        dispatch(
                          setMemberCommentsModal({
                            isOpen: true,
                            mb_id: value._id,
                          })
                        )
                      }
                    />
                  </div>
                  <div
                    onClick={() => likeHandler(value)}
                    className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]"
                  >
                    {likedDoctors[value._id] ? (
                      <HeartFilled className="text-red-500" />
                    ) : (
                      <HeartOutlined />
                    )}
                  </div>
                  <div
                    onClick={() =>
                      navigate(
                        `/single-doctor/${value.mb_profession}/${value._id}`
                      )
                    }
                    className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]"
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
        })
      
      )}
      </div>
    </div>
  );
};

export default TopDoctors;
