import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Tour from "./Pages/Tour";
import Home from "./Pages/Home";
import TourDetail from "./components/TourDetail";
import Keelung from "./Pages/Keelung";
import Taipei from "./Pages/Taipei";
import KeelungDetail from "./components/KeelungDetail";
import Kaohsiung from "./Pages/Kaohsiung";
import TaipeiDetal from "./components/TaipeiDetal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/haveaniceday/" element={<Layout />}>
          <Route path="/haveaniceday/" element={<Home />} exact></Route>
          <Route path="/haveaniceday/taipei" element={<Tour />}>
            <Route index element={<Taipei />} />
            <Route path=":Id" element={<TaipeiDetal />} />
          </Route>
          <Route path="/haveaniceday/keelung" element={<Tour />}>
            <Route index element={<Keelung />} />
            <Route path=":Id" element={<KeelungDetail />} />
          </Route>
          <Route path="/haveaniceday/kaohsiung" element={<Tour />}>
            <Route index element={<Kaohsiung />} />
            <Route path=":Id" element={<TourDetail />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
