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
    <div className="h-fit bg-cover bg-[url(https://www.pepperconstruction.com/sites/default/files/images/community-east-hospital-teg-architects-810_3138.jpg)] relative max-md:h-[70%] max-sm:h-[50%] ">
      <div className="absolute w-full h-full bg-black opacity-40 z-[1]"></div>
      <div className="relative z-10 py-[185px]">
        <h1 className="text-[64px] text-white font-bold text-center max-md:text-[30px]">
          Feel better about finding healthcare
        </h1>
        <p className="w-[622px] text-white m-auto text-center text-sm font-semibold  leading-[20px] max-md:w-[80%] max-md:m-auto max-md:text-xs">
          At Guardian Care Clinic, we offer a wide range of services including
          inpatient, outpatient and emergency care services in addition to many
          specialty services.
        </p>
        <div className=" w-full mt-[135px] h-[180px] bg-gray-200 bg-opacity-60 grid grid-cols-3 gap-4 max-md:grid-cols-1  max-md:h-50 ">
          <div className="w-[33%] m-auto my-6 h-24 max-md:hidden">
            <Carousel
              autoplay
              fade
              dots={false}
              className="transition-duration-2000   "
            >
              <div className="w-full m-auto flex   items-center justify-center  ">
                <SettingTwoTone
                  className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className=" my-2 text-red-950 font-semibold text-center" > Latest Technologies & Equipments</h3>
              </div>
              <div className=" flex h-[150px] items-center justify-center ">
                <ClockCircleTwoTone
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center">Fast and Flex Service</h3>
              </div>
              <div className=" flex h-[150px] items-center justify-center ">
                <ExclamationCircleTwoTone
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center">
                  Emergency Help Available 24/7
                </h3>
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
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center"> Experienced Doctors & Professionals</h3>
              </div>
              <div className=" flex h-[150px] items-center justify-center ">
                <ContactsTwoTone
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center">
                  Medical Advices and Check Ups
                </h3>
              </div>
              <div className=" flex h-[150px] items-center justify-center">
                <CrownTwoTone
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center">Cutting Edge Facility and Rooms</h3>
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
                <StarTwoTone
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center">Customer Satisfaction </h3>
              </div>
              <div className="flex h-[150px] items-center justify-center ">
                <ExperimentTwoTone
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center">
                  Medical Surgery & Consulting
                </h3>
              </div>
              <div className=" flex h-[150px] items-center justify-center ">
                <SecurityScanTwoTone
                className="flex justify-center"
                  twoToneColor="#06B6D4"
                  style={{ fontSize: "6em" }}
                />
                <h3 className="my-2 text-red-950 font-semibold text-center">
                  Diagnosis and Investigation
                </h3>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
