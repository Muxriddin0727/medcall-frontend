import { useState, type FC, useEffect } from "react";
import Description from "./Description";
import DoctorInfo from "./DoctorInfo";
import { FindDoctors } from "../../../../types/user";
import Img from "./Img";
import { useAxios } from "../../../customHooks/useAxios";

const SingleDoctor: FC = () => {
  const [chosenDoctorData, setChosenDoctor] = useState<FindDoctors | null>(null);
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: `/find-doctors/:id`,
    }).then((data) => {
      setChosenDoctor(data.data.data);
    });
  }, []);
  return (
    <div className=" w-[90%] m-auto mt-[43px]">
      <div className="flex w-full gap-[200px] max-lg:flex-col">
        <div className=" w-[30%]">
          {chosenDoctorData && <Img value={chosenDoctorData} />}
        </div>
        <div className="w-[70%]">
          {chosenDoctorData && <DoctorInfo value={chosenDoctorData} />}
        </div>
      </div>
      <Description />
    </div>
  );
};

export default SingleDoctor;
