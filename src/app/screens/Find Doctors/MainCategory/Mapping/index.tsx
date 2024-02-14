import { useState, type FC, useEffect } from "react";
import Headers from "./Headers";
import Card from "./Card";
import { Pagination, Skeleton } from "antd";
import { useAxios } from "../../../../customHooks/useAxios";
import { FindDoctors } from "../../../../../types/user";
import { useAppSearchParams } from "../../../../customHooks/useSearchParams";
import SkeletonImage from "antd/es/skeleton/Image";
import { useCheckTokenValidity } from "../../../../../app/api/verify";

const Mapping: FC = () => {
  const { getParams } = useAppSearchParams();
  const [doctorsData, setAllDoctors] = useState([]);
  const [likeDoctors, setLikeDoctors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const checkTokenValidity = useCheckTokenValidity();

  const itemsPerPage = 9;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoctorsData = doctorsData.slice(startIndex, endIndex);

  const axios = useAxios();
  const category = getParams("category") || "";
  const type = getParams("type") || "";

  useEffect(() => {
    setLoading(true);
    axios({
      url: `/client/category/${category}?type=${type}`,
    }).then((data) => {
      setAllDoctors(data.data.data);
      setLoading(false);
    });
  }, [category, type]);

  useEffect(() => {
    checkTokenValidity().then((isValid) => {
      if (isValid) {
        axios({
          method: "POST",
          url: `/client/member-liken`,
        }).then((data) => {
          setLikeDoctors(data.data.data);
        });
      }
    });
  }, []);

  return (
    <div className="w-full ml-4">
      <Headers />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
        {loading
          ? Array(itemsPerPage)
              .fill(0)
              .map((_, index) => (
                <Skeleton key={index} active paragraph={{ rows: 4 }} />
              ))
          : currentDoctorsData.map((value: FindDoctors) => (
              <Card value={value} category={category} key={value._id} />
            ))}
      </div>
      {!loading && (
        <Pagination
          className=" flex justify-center my-6"
          current={currentPage}
          total={doctorsData.length}
          pageSize={itemsPerPage}
          onChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Mapping;
