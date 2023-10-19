import React from "react";
import "../css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FindDoctorsPage from "./screens/FindDoctorsPage";
import AppointmentPage from "./screens/AppointmentPage";
import BlogsPage from "./screens/BlogsPage";
import HelpPage from "./screens/HelpPage";
import LoginPage from "./screens/LoginPage";
import MyPage from "./screens/MyPage";
import HomePage from "./screens/HomePage";
import ModalVisibility from "./components/ModalVisibility"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <ModalVisibility/>
   <Routes>

    <Route path = "/" element ={<Navbar/>}>
     
       <Route path="/findDoctors" element={<FindDoctorsPage />}></Route>

       <Route path="/appointment" element={<AppointmentPage />}></Route>

       <Route path="/myPage" element={<MyPage />}></Route>

       <Route path="/blogs" element={<BlogsPage />}></Route>

       <Route path="/help" element={<HelpPage />}></Route>

       <Route path="/login" element={<LoginPage />}></Route>

       <Route path="/" element={<HomePage />}></Route>

       </Route>
     
   </Routes>
   </>
  );
}

export default App;
