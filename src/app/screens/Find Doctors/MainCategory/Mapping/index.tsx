import { useState, type FC, useEffect } from "react";
import Headers from "./Headers";
import Card from "./Card";
import { useAxios } from "../../../../customHooks/useAxios";
import { FindDoctors } from "../../../../../types/user";
import { useAppSearchParams } from "../../../../customHooks/useSearchParams";



const Mapping: FC = () => {
  const {getParams}= useAppSearchParams();
  const [doctorsData, setAllDoctors] = useState([]);
  const axios = useAxios();
  const category = getParams("category");

  useEffect(() => {
    axios({
      url: `/client/category/${category}`,
    }).then((data) => {
      setAllDoctors(data.data.data);
    });
  }, [category]);
  return (
    <div className="w-full ml-4">
      <Headers />
      <div className="grid grid-cols-3 grid-flow-row gap-4 my-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {doctorsData.map((value: FindDoctors) => (
          <Card value = {value} key={value._id}/>
        ))}
      </div>
    </div>
  );
};

export default Mapping;
