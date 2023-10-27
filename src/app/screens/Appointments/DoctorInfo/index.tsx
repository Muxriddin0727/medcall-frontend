import type { FC } from "react";
import { Descriptions, Rate, Skeleton, Tooltip, Button } from "antd";
import { HeartFilled } from "@ant-design/icons";

const DoctorInfo: FC = () => {
    return (
        <div className="">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <Skeleton.Avatar active={true} />

                    <Tooltip title="David">
                        <img
                            className="rounded-full w-[50px] h-[50px] cursor-pointer"
                            src="/doctors/david.jpg"
                            alt="david"
                        />
                    </Tooltip>

                    <div>
                        <div>
                            <h1 className="font-bold text-[28px]">
                                <Skeleton.Input />
                            </h1>
                            <h3 className="font-bold text-[#46A358] text-[22px]">
                                <Skeleton.Input />
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center font-light text-[12px]">
                    <Rate defaultValue={20} /> <p> Customer Review</p>
                </div>
            </div>
            <div className="border border-[#46A35880] mt-[12px]" />
            <div className="mt-[12px]">
                <h3 className="font-medium text-[20px]">Short Description:</h3>
                <p className="font-light mt-[10px]">
                    <Skeleton /> : "Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </p>
            </div>
            <div className="mt-[12px]">
                <h3 className="font-medium text-[20px]">Size:</h3>
            </div>
            <div className="flex mt-[10px] gap-3">
                <Button type="primary" className="w-[130px] h-[40px] bg-sky-500/100">
                    Message
                </Button>
                <Button type="primary" className="w-[130px] h-[40px] bg-sky-500/100">
                    Book
                </Button>
                <Button className="w-[40px] h-[40px] bg-transparent border border-[#46A358] text-[20px] ">
                    <HeartFilled className="text-[red]" />
                </Button>
            </div>
            <Descriptions className="mt-[12px]">
                <Descriptions.Item span={3} label="Experience">
                    <Skeleton.Input /> 10 Years
                </Descriptions.Item>
                <Descriptions.Item span={3} label="Department">
                    <Skeleton.Input /> Cardiology
                </Descriptions.Item>
                <Descriptions.Item span={3} label="Fee">
                    30 min - 30 000 UZS
                </Descriptions.Item>
            </Descriptions>
        </div>
    );
};

export default DoctorInfo;
