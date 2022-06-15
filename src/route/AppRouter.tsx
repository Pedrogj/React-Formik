import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../react-form/components/Navbar";
import { RegisterPage } from "../react-form/pages/RegisterPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};
