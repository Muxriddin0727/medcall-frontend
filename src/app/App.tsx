import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModalVisibility from "./components/ModalVisibility";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindDoctors from "./screens/Find Doctors";
import SingleDoctor from "./screens/Find Doctors/SingleDoctor";
import Blogs from "./screens/Blogs";
import Render from "./screens/Blogs/Rander";
import Help from "./screens/Help";
import MemberPage from "./screens/MemberPage";

const App: FC = () => {
  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/find-doctors/:id" element={<SingleDoctor />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Render />} />
          <Route path="/help" element={<Help />} />
          <Route path="/member-page" element={<MemberPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
