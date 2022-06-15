import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../react-form/components/Navbar";
import { FormikBasicPage } from "../react-form/pages/FormikBasicPage";
import { RegisterPage } from "../react-form/pages/RegisterPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="formik-basic" element={<FormikBasicPage />} />
      </Routes>
    </BrowserRouter>
  );
};
