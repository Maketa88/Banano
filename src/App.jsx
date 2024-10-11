import { Routes, Route } from "react-router-dom";
import { MainCompany } from "./Pages/Company/Company";

import { NotFound } from "./Components/Not Found/NotFound";
import { Header } from "./Layouts/Home/Header/Header";
import { Footer } from "./Layouts/Home/Footer/Footer";






export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        
        <Route path="/" element={<MainCompany />} />
        <Route path="/*" element={<NotFound />} />
        

        
      </Routes>
      <Footer/>
    </>
  );
};
