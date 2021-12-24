import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "pdp/PdpContent";
import CartContent from "cart/CartContent";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
        <Route path="/" element={<PdpContent/>} />
        <Route path="/products/:id" element={<PdpContent/>} />
        <Route path="/cart" element={<CartContent />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
