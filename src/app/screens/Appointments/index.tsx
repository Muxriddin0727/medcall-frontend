import type { FC } from "react";
import Img from "./Img";
import Description from "./Description";
import DoctorInfo from "./DoctorInfo";

const Appointments: FC = () => {
    return (
        <div className="mt-[43px]">
            <div className="flex w-full gap-12 max-lg:flex-col">
                <div className="flex-1"><Img  /></div>
                <div className="flex-1"><DoctorInfo /></div>
            </div>
            <Description />
        </div>
    );
};

export default Appointments;
