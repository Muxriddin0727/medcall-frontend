import { useState, type FC, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FindDoctors } from "../../../../.././../types/user";
import { useAxios } from "../../../../../customHooks/useAxios";
//import { verifiedMemberData } from "../../../../../api/verify";
import { Definer } from "../../../../../../lib/Definer";
import assert from "assert";
import MemberApiService from "../../../../../api/memberApi";
import { Button } from "antd";
import {
  HeartFilled,
  HeartOutlined,
  WechatOutlined,
  DownOutlined,
} from "@ant-design/icons";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../../../../lib/sweetAlert";

const Card: FC<{ value: FindDoctors, category:string }> = ({ value, category }) => {
  const refs: any = useRef([]);
  const navigate = useNavigate();
  const member_data = localStorage.getItem("member_data");

  const likeHandler = async (e: any, id: string) => {
    try {
      // assert.ok(verifiedMemberData, Definer.auth_err1);

      const memberService = new MemberApiService();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: id,
        group_type: "member",
      });

      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "white";
        refs.current[like_result.like_ref_id].innerHTML--;
      }

      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log(`targetLikeHandler, ERROR:`, err);
      sweetErrorHandling(err).then();
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
            <WechatOutlined />
          </div>
          <div className="bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px]">
            <Button
              className=""
              type="primary"
              shape="circle"
              icon={
                value?.me_liked && value?.me_liked[0]?.my_favorite ? (
                  <HeartFilled />
                ) : (
                  <HeartOutlined />
                )
              }
              onClick={(e) => {
                e.stopPropagation();
                if (member_data) likeHandler(e, value._id);
              }}
              style={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "1rem",
                bottom: 0,
                transform: "translateY(50%)",
                color: "rgba(0,0,0,.4)",
              }}
            />
          </div>
          <div
            onClick={() => navigate(`/single-doctor/${value._id}?category=${category}`)}
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
