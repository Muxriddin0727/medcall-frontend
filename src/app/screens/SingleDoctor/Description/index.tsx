import { FC, useState } from "react";
import { FindDoctors } from "../../../../types/user";
import Feedbacks from "./FeedBacks";
import Blogs from "./Blogs";
import { useParams } from "react-router-dom";
import { Blog } from "../../../../types/blogs";

const Description: FC<{value:FindDoctors  }> = ({ value }) => {
  const { id = "", category } = useParams<{ id: string; category: string }>();
  const [active, setActive] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <div className="mt-[92px]">
      <div className="flex gap-5 border-b border-cyan-500 pb-[5px]">
        <h3
          className={`cursor-pointer hover:text-cyan-500 ${
            active === "description" && "text-cyan-600"
          }`}
          onClick={() => setActive("description")}
        >
          Feedbacks
        </h3>
        <h3
          className={`cursor-pointer hover:text-cyan-500 ${
            active === "reviews" && "text-cyan-600"
          }`}
          onClick={() => setActive("reviews")}
        >
          Blogs
        </h3>
      </div>
      {active === "description" ? <Feedbacks mb_id={id} /> : <Blogs />}
    </div>
  );
};

export default Description;
