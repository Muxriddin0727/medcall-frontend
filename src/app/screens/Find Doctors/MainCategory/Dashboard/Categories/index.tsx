import { useState, type FC, useEffect } from "react";
import { useAxios } from "../../../../../customHooks/useAxios";
import { useSearchParams } from "react-router-dom";

const Categories: FC = () => {
  const [params, setParams] = useSearchParams();
  const axios = useAxios();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "/client/category",
    }).then((res) => {
      setData(res.data.data);
    });
  }, [] );

  const active_category = params.get("category");

  return (
    <div>
      <h3 className="  font-bold">Categories</h3>
      <div>
        {data.map(( value: {name: string, count:number, route_path: string, _id: string},  ) =>(
        <div 
        onClick={() => setParams({ category: value.route_path })}
        key={value._id}
        className={`flex justify-between mt-[10px] pl-[16px] cursor-pointer hover:text-[#06B6D4] transition-colors
        ${active_category === value.route_path && "text-[#06B6D4]"} `}>
          <h3 className="text-base font-normal ">{value.name }</h3>
          <p className="text-base font-normal ">({value.count})</p>
        </div>
         ))}
      </div>
    </div>

  )
}

export default Categories;