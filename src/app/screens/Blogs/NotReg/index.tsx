import { FC } from "react";
import { Button } from "antd";
import { verifiedMemberData } from "../../../api/verify";
import { useReduxDispatch } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { setAuthModal } from "../../../redux/modalSlice";

const NotReg: FC = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div className="w-full h-[300px] p-[50px] bg-[#F5F5F5] mt-3 flex max-2xl:h-[200px] max-md:h-[150px] justify-between">
        <img
          src="/icons/desked.png"
          className="w-[15%] h-full"
          alt="blog_avatar_1"
        />
        <img
          className="w-[13%] h-full mt-[20px]"
          src="/icons/boboy.png"
          alt="blog_avatar_2"
        />
        <img
          className="w-[15%] h-full mt-[50px]"
          src="/icons/blogger.png"
          alt="blog_avatar_3"
        />
        <img
          className="w-[15%] h-full mt-[20px]"
          src="/icons/telcha.png"
          alt="blog_avatar_4"
        />
        <img
          className="w-[14%] h-full"
          src="/icons/togo.png"
          alt="blog_avatar_5"
        />
      </div>
      <h1 className="mt-[50px] font-black text-center leading-tight text-[6vw]">
        Navigate Health Smarter with{" "}
        <span className="text-[#48b6ca]">Guardian Care</span>
      </h1>
      <p className="text-center max-w-[70%] text-[18px] mt-[20px] max-xl:text-[2vw] ">
        Explore the latest insights, medical updates, and wellness advice at
        Guardian Care Clinic's Blog Hub. As your dedicated healthcare companion,
        we bring you a wealth of knowledge, expert opinions, and practical tips
        to empower you on your health journey.
      </p>
      {!verifiedMemberData && (
        <Button
          onClick={() => {
            dispatch(setAuthModal());
          }}
          type="primary"
          className="mt-12  bg-cyan-500 "
        >
          Join MedCall
        </Button>
      )}
    </div>
  );
};

export default NotReg;
