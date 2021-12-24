import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "pdp/PdpContent";
import HomeContent from "home/HomeContent";
import CartContent from "cart/CartContent";
import "./index.scss";
import "remixicon/fonts/remixicon.css";

export default function MainLayout() {
  return (
    <BrowserRouter>
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="products/:id" element={<PdpContent />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}