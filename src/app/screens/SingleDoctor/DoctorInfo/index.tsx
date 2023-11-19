import type { FC } from "react";
import { Descriptions, Rate, Skeleton, Tooltip, Button, Badge } from "antd";
import { useReduxDispatch } from "../../../hooks";
import { setBookModal } from "../../../redux/modalSlice";
import { FindDoctors } from "../../../.././types/user";



const DoctorInfo: FC <{value: FindDoctors}> = ({value}) => {
    const dispatch= useReduxDispatch();

    return (
        <div className="">
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <Skeleton.Avatar active={true} />

                    <Tooltip title={value.mb_name}>
                        <img
                            className="rounded-full w-[50px] h-[50px] cursor-pointer"
                            src={`http://localhost:5005/${value.mb_image}`}
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
            <div className="border border-[#0EA5E9] mt-[12px]" />

            <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="mt-[12px]">
                    <h3 className="font-medium text-[20px]">Dagrees</h3>
                    <Badge
                        className="font-medium text-[20px]"
                        color="#0EA5E9"
                        text="University of California, San Francisco"
                    />
                    <p>Medical Dagree </p>

                    <Badge
                        className="font-medium text-[20px]"
                        color="#0EA5E9"
                        text="University of California, Los Angels (UCLA)"
                    />
                    <p>Completed Recidency training in Cardiology</p>
                    <Badge
                        className="font-medium text-[20px]"
                        color="#0EA5E9"
                        text="University of California, Berkeley"
                    />
                    <p>Master of Public Helth Dagree </p>
                </div>

                <div className="mt-[12px]">
                    <h3 className="font-medium text-[20px]">Experience</h3>
                    <Badge
                        className="font-medium text-[20px]"
                        color="#0EA5E9"
                        text="Fellow of the American College of Cardiology (FACC)                        "
                    />

                    <Badge
                        className="font-medium text-[20px]"
                        color="#0EA5E9"
                        text="Active member of the American Heart Association                        "
                    />
                    <p>Completed Recidency training in Cardiology</p>
                    <Badge
                        className="font-medium text-[20px]"
                        color="#0EA5E9"
                        text="Collaborative work with local heart health advocacy groups                        "
                    />
                </div>
            </div>

            <Descriptions className="mt-[24px]">
                <Descriptions.Item span={3} label="Fee">
                    {value.mb_price}
                </Descriptions.Item>
            </Descriptions>

            <div className="flex mt-[10px] gap-3">
                <Button type="primary" className="w-[130px] h-[40px] bg-sky-500/100">
                    Message
                </Button>
                <Button 
                onClick = {() => dispatch(setBookModal())}
                type="primary" 
                className="w-[130px] h-[40px] bg-sky-500/100">
                    Book
                </Button>
            </div>
        </div>
    );
};

export default DoctorInfo;
