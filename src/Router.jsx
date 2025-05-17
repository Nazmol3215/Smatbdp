import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ContactForm from "./OtherPages/UserForm";
import DetaisPages from "./DetaisPages/DetaisPages";
import PropertyLocationMap from "./OtherPages/PropertyLocationMap"
import Bhaluka_Upazila from "./BhalukaAbout/Bhaluka_Upazila";

export default function Router() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ContactForm" element={<ContactForm />} />
      <Route path="/DetaisPages" element={<DetaisPages />} />
      <Route path="/PropertyLocationMap" element={<PropertyLocationMap />} />
      <Route path="/Bhaluka_Upazila" element={<Bhaluka_Upazila />} />
      
    </Routes>
  </BrowserRouter>
    </>
  )
}
