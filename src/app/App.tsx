import type { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ModalVisibility from "./components/ModalVisibility"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


const App: FC = () => {
  return (
    <>
      <ModalVisibility />
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
