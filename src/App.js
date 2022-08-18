import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import Tour from "./Pages/Tour";
import Home from "./Pages/Home";
import FAQ from "./Pages/FAQ";
import TourDetail from "./components/TourDetail";
import TourList from "./components/TourList";

function App() {
  <nav>
    <li>
      <Link to="/haveaniceday/">Home</Link>
    </li>
    <li>
      <Link to="/haveaniceday/faq">FAQ</Link>
    </li>
    <li>
      <Link to="/haveaniceday/tour">Tour</Link>
    </li>
  </nav>;

  return (
    <div className="App">
      <Routes>
        <Route path="/haveaniceday/" element={<Layout />}>
          <Route path="/haveaniceday/" element={<Home />} exact />
          <Route path="/haveaniceday/tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":Id" element={<TourDetail />} />
          </Route>
          <Route path="/haveaniceday/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
