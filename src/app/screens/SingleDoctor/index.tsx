import { useState, type FC, useEffect } from "react";
import Description from "./Description";
import DoctorInfo from "./DoctorInfo";
import { FindDoctors } from "../../../types/user";
import Img from "./Img";
import { useAxios } from "../../customHooks/useAxios";
import { useParams } from "react-router-dom";
import { useAppSearchParams } from "../../customHooks/useSearchParams";

const SingleDoctor: FC = () => {
  const [chosenDoctorData, setChosenDoctor] = useState<FindDoctors | null>(null);
  const {getParams}= useAppSearchParams();
  const axios = useAxios();
  const {id} = useParams();
  const category = getParams("category");

  useEffect(() => {
    axios({
      url: `/client/category/${category}/${id}`,
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
