import { useState, type FC, useEffect } from "react";
import {
  SettingTwoTone,
  SafetyCertificateTwoTone,
  ContactsTwoTone,
  StarTwoTone,
  ClockCircleTwoTone,
  ExclamationCircleTwoTone,
  CrownTwoTone,
  ExperimentTwoTone,
  SecurityScanTwoTone,
} from "@ant-design/icons";
import { Carousel, Divider } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "cyan-500",
};

const Welcome: FC = () => {
  return (
    <div className="h-fit bg-cover bg-[url(https://www.pepperconstruction.com/sites/default/files/images/community-east-hospital-teg-architects-810_3138.jpg)] relative ">
      <div className="absolute w-full h-full bg-black opacity-30 z-[1]"></div>
      <div className="relative z-10 py-[185px]">
        <h1 className="text-[64px] text-white font-bold text-center max-md:text-[30px]">
          Feel better about finding healthcare
        </h1>
        <p className="w-[622px] text-white m-auto text-center text-sm font-normal leading-[30px] max-md:w-[80%] max-md:m-auto max-md:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra
          posuere sem purus enim eleifend habitant arcu, sed.
        </p>
        <div className=" w-full mt-32 h-[165px] bg-gray-200 bg-opacity-60 grid grid-cols-3 gap-4 max-md:grid-cols-1  max-md:h-auto ">
        <div className="w-[33%] m-auto my-6 h-24 max-md:hidden">
          <Carousel
            autoplay
            fade
            dots={false}
            className="transition-duration-2000   "
          >
            <div className="w-full m-auto flex   items-center justify-center  ">
              <SettingTwoTone
                className=""
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3 className="my-2 font-semibold"> Latest Technologies</h3>
            </div>
            <div className=" flex h-[150px] items-center justify-center ">
              <ClockCircleTwoTone
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3 className="my-2 font-semibold">Fast & Flex Service</h3>
            </div>
            <div className=" flex h-[150px] items-center justify-center ">
              <ExclamationCircleTwoTone
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3 className="my-2 font-semibold">Emergency Help Available 24/7</h3>
            </div>
          </Carousel>
        </div>

        <div className="w-[33%] m-auto my-6 h-24 items-center max-md:hidden">
          <Carousel
            autoplay
            fade
            dots={false}
            className="transition-duration-2000 "
          >
            <div className=" flex h-[150px] items-center justify-center ">
              <SafetyCertificateTwoTone
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3  className="my-2 font-semibold"> Experienced Doctors</h3>
            </div>
            <div className=" flex h-[150px] items-center justify-center ">
              <ContactsTwoTone
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3  className="my-2 font-semibold">Medical Advices & Check Ups</h3>
            </div>
            <div className=" flex h-[150px] items-center justify-center">
              <CrownTwoTone
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3  className="my-2 font-semibold">Cutting Edge Facility</h3>
            </div>
          </Carousel>
        </div>

        <div className="w-[33%] m-auto my-6 h-24 items-center ">
          <Carousel
            autoplay
            fade
            dots={false}
            className="transition-duration-2000 "
          >
            <div className=" flex h-[150px] items-center justify-center ">
              <StarTwoTone twoToneColor="#06B6D4" style={{ fontSize: "6em" }} />
              <h3  className="my-2 font-semibold">Customer Satisfaction</h3>
            </div>
            <div className="flex h-[150px] items-center justify-center ">
              <ExperimentTwoTone
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3  className="my-2 font-semibold">Medical Treatment Surgery</h3>
            </div>
            <div className=" flex h-[150px] items-center justify-center ">
              <SecurityScanTwoTone
                twoToneColor="#06B6D4"
                style={{ fontSize: "6em" }}
              />
              <h3  className="my-2 font-semibold">Diagnosis and Investigation</h3>
            </div>
          </Carousel>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
