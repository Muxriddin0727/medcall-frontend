import { FC } from "react";
import Blogs from "./Card";

const Posts: FC = () => {
  return (
    <div className="mt-[30px] w-full grid grid-cols-3 gap-4 max-sm:grid-cols-2 ">
      <Blogs />
    </div>
  );
};

export default Posts;
