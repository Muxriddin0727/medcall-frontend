import { useState, type FC, useEffect } from "react";
import Welcome from "./Welcome";
import AboutUs from "./About us";
import TopDoctors from "./TopDoctors";
import Feedbacks from "./Feedbacks";
import Why from "./Why";
import { FindDoctors } from "../../../types/user";
import { useAppSearchParams } from "../../customHooks/useSearchParams";
import { useAxios } from "../../customHooks/useAxios";
import { useParams } from "react-router-dom";

const HomePage: FC = () => {
  const [doctorsData, setAllDoctors] = useState([]);
  const axios = useAxios();
  const { getParams } = useAppSearchParams();
  const { id } = useParams();
  const category = getParams("category") || "";
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    axios({
      url: `/client/category/${category}`,
    }).then((data) => {
      setAllDoctors(data.data.data);
    });
  }, [category]);
  console.log("doctordata", doctorsData);
  console.log("category", category);

  return (
    <div className="">
      <Welcome />
      <AboutUs />
      <TopDoctors category={category} />
      <Feedbacks />
      <Why />
    </div>
  );
};

export default HomePage;
