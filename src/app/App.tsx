import { FC, useState } from "react";
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
import { Definer } from "./../lib/Definer";
import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "../lib/sweetAlert";
import MemberApi from "./api/memberApi";

const App: FC = () => {
  const [path, setPath] = useState();
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // HANDLERS //


  const handleLogOutRequest = async () => {
    try {
      const memberApiService = new MemberApi();
      await memberApiService.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
    } catch (err: any) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };

  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
             
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/find-doctors/:id" element={<SingleDoctor />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<Render />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
