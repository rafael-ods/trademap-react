import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "components/Header";
import Footer from "components/Footer";
import { NewSletterProvider } from "data/context/NewSletter";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <NewSletterProvider>
        <Footer />
      </NewSletterProvider>
    </BrowserRouter>
  );
};

export default RouterApp;
