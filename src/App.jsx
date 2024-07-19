import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { navlinks, footerAPI } from "./data/travigodata";
import { Dashboard } from "./pages/Dashboard";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Guest } from "./pages/Guest";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Review } from "./pages/Review";
import Activity from "./pages/Activity";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review" element={<Review />} />
        <Route path="/stories" element={<Activity />} />
      </Routes>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
