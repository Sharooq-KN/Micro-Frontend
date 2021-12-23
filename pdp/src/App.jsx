import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Header from "home/Header";
import Footer from "home/Footer";
import PdpContent from "./PdpContent";
import "./index.scss";
import "remixicon/fonts/remixicon.css";
const App = () => (
  <BrowserRouter>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
        <Route path="/" element={<PdpContent/>} />
        <Route path="/products/:id" element={<PdpContent/>} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
