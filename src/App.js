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
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/faq">FAQ</Link>
    </li>
    <li>
      <Link to="/tour">Tour</Link>
    </li>
  </nav>;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} exact />
          <Route path="/tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":Id" element={<TourDetail />} />
          </Route>
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
