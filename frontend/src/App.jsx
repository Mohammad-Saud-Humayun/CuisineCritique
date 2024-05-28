import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About/About";
import Services from "./components/Services/Services";
import Restaurant from "./pages/restaurant/Restaurant";

import SinglePage from "./pages/restaurant/RestaurantSinglePage/SinglePage";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:RestaurantId" element={<SinglePage/>} />
      </Routes>
    </div>
  );
};

export default App;
