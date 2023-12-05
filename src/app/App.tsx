import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModalVisibility from "./components/ModalVisibility";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FindDoctors from "./screens/Find Doctors";
import SingleDoctor from "./screens/SingleDoctor";
import Blogs from "./screens/Blogs";
import Help from "./screens/Help";
import MemberPage from "./screens/MemberPage";
import SubBlog from "./screens/Blogs/Posts/SubBlog";
import AccountDetails from "./screens/MemberPage/AccountDetails";
import MyAppointments from "./screens/MemberPage/MyAppointments";
import FavBlogs from "./screens/MemberPage/FavBlogs";
const App: FC = () => {
  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/single-doctor/:category/:id" element={<SingleDoctor />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<SubBlog />} />
          <Route path="/help" element={<Help />} />
          <Route path="/member-page" element={<MemberPage />}>
            <Route path="account-details" element={<AccountDetails />} />
            <Route path="my-appointments" element={<MyAppointments />} />
            <Route path="favorite-blogs/:id" element={<FavBlogs />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
