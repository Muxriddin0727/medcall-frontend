import { useState, type FC, useEffect } from "react";import Headers from "./Headers";
import Card from "./Card";
import { useAxios } from "../../../../customHooks/useAxios";
import { FindDoctors } from "../../../../../types/user";



const Mapping: FC = () => {
  const [doctorsData, setAllDoctors] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios({
      url: "/client/get-doctors",
    }).then((data) => {
      setAllDoctors(data.data.data);
    });
  }, []);
  return (
    <div className="w-full ml-4">
      <Headers />
      <div className="grid grid-cols-3 grid-flow-row gap-4 my-6 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {doctorsData.map((value: FindDoctors) => (
          <Card value = {value} />
        ))}
      </div>
    </div>
  );
};

export default Mapping;
