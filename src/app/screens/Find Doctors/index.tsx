import type { FC } from "react";
import Intro from "./Intro";

import MainCategory from "./MainCategory";
import SingleDoctor from "./SingleDoctor";

const FindDoctors: FC = () => {
  return (
    <div>
      <Intro />
      <MainCategory />
      
    </div>
  );
};

export default FindDoctors;
