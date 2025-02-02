import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About"
import Layout from "@/pages/Layout"
import Services from "./pages/Services";
import AboutComponenet from "@/components/AboutComponent";
import ServiceComponenet from "./components/ServicesComponenet";
import ContactForm from "./components/ContactForm";
import ContactUs from "./components/ContactUs";

export const App = () => {
  return (
    <div>
    <ContactUs/>
    <ContactForm/>
    <AboutComponenet/>
    <ServiceComponenet/>
    </div>
  );
};

export default App;
