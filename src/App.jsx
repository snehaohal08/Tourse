import React from "react";
import AboutComponenet from "@/components/AboutComponent";
import ServiceComponenet from "./components/ServicesComponenet";
import ContactForm from "./components/ContactForm";
import ContactUs from "./components/ContactUs";
import OurCarsComponent from "./components/OurCarsComponenet";
import CarBookingform from "./components/CarBookingform.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import LoginForm from "./components/LoginForm";
import CarServices from "@/components/CarServices"


export const App = () => {
  return (
    <div>
      <CarServices/>
      <LoginForm/>
      <SignUpForm/>
      <OurCarsComponent/>
      <CarBookingform/>
    <ContactUs/>
    <ContactForm/>
    <AboutComponenet/>
    <ServiceComponenet/>
    </div>
  );
};

export default App;
