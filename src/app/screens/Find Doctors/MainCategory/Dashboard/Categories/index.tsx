import { useState, type FC, useEffect } from "react";
import { useAxios } from "../../../../../customHooks/useAxios";
import { useAppSearchParams } from "../../../../../customHooks/useSearchParams";
import { Carousel, Card } from 'antd';

const { Meta } = Card;


const Categories: FC = () => {
  const { getParams, setParams } = useAppSearchParams();
  const axios = useAxios();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios({
      url: "/client/category",
    }).then((res) => {
      setData(res.data.data);
      setCount(res.data.count);
    });
  }, []);

  const active_category = getParams("category");

  return (<div className="flex flex-col">
    <div>
      <h3 className="  font-bold">Categories</h3>
      <div>
        {data?.map(
          (value: {
            name: string;
            count: number;
            route_path: string;
            _id: string;
          }) => {
            console.log("value", value); // Add this line
            return (
              <div
                onClick={() => setParams({ category: value.route_path })}
                key={value._id}
                className={`flex justify-between mt-[10px] pl-[16px] cursor-pointer hover:text-[#06B6D4] transition-colors
    ${active_category === value.route_path && "text-[#06B6D4]"} `}
              >
                <h3 className="text-base font-semibold ">{value.name}</h3>
                <p className="text-base font-semibold ">{value.count}</p>
              </div>
            );
          }
        )}
      </div>
    </div>
    <Card
  className="mt-6 m-auto"
  hoverable
  style={{ width: 240 }}
>
  <Carousel 
  dots={false}
  autoplay
  >
    <div>
      <img alt="example" src="/doctors/hospital.jpg" />
    </div>
    <div>
      <img alt="example" src="/doctors/hospital2.jpg" />
    </div>
    <div>
      <img alt="example" src="/doctors/hospital3.jpg" />
    </div>
    <div>
      <img alt="example" src="/doctors/hospital4.jpg" />
    </div>
  </Carousel>
  <Meta title="Your Health Our Mission" description="guardianCare@gmail.com" />
</Card>

    </div>
  );
};

export default Categories;
