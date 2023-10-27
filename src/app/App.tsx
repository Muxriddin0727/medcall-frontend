import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModalVisibility from "./components/ModalVisibility"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FindDoctors from "./screens/Find Doctors";
import Appointments from "./screens/Appointments";



const App: FC = () => {
  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/find-doctors" element={<FindDoctors />} />
          <Route path="/appointments" element={<Appointments />} />

        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
