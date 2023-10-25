import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModalVisibility from "./components/ModalVisibility"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FindDoctors from "./screens/Find Doctors";


const App: FC = () => {
  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/findDoctors" element={<FindDoctors />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
