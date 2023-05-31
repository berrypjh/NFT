import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Calender from "./pages/calendar";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calender" element={<Calender />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
