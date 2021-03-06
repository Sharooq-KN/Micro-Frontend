import React from "react";
import ReactDOM from "react-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import "./index.scss";
import CartContent from "cart/CartContent";
import HomeContent from "home/HomeContent";
import PdpContent from "pdp/PdpContent";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
          <Route path="/" element={<CartContent />} />
          <Route path="/cart" element={<CartContent />} />
          <Route path="/home" element={<HomeContent />} />
          <Route path="/products/:id" element={<PdpContent />} />
        </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
