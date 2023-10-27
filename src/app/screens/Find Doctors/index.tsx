import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Intro from "./Intro";

import MainCategory from "./MainCategory";
import SingleDoctor from "./SingleDoctor";

const FindDoctors: FC = () => {
  return (
    <div>
      <Intro />
      <MainCategory />

      <div>

        <Routes>
                <Route path="/find-doctors/:doctor_id" element={<SingleDoctor />} />
            </Routes>
      </div>
    </div>
  );
};

export default FindDoctors;
