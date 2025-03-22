// import React from "react";
// import AboutComponenet from "@/components/AboutComponent";
// import ServiceComponenet from "./components/ServicesComponenet";
// import ContactForm from "./components/ContactForm";
// import ContactUs from "./components/ContactUs";
// import OurCarsComponent from "./components/OurCarsComponenet";
// import CarBookingform from "./components/CarBookingform.jsx";
// import SignUpForm from "./components/SignUpForm.jsx";
// import LoginForm from "./components/LoginForm";
// import CarServices from "@/components/CarServices"
// import LoginSignup from "@/components/LoginSignup"
// import PieChart from "./components/charts/PieChart";
// import DonutChart from "./components/DonutChart";
// import BarChart from "./components/charts/BarChart";
// import ExPieChart from "./components/charts/ExPieChart";
// import CRUDop from "./components/CRUD/Booking";
// import Admin from "./pages/Admin";
// import TableComponent from "./pages/TableComponent";

// // import DashBoard from "./components/DashBoard";


// export const App = () => {
//   return (
//     <div>
//        {/* <CarBookingform/> */}
//       {/* <TableComponent/> */}
//       {/* <DonutChart/> */}
//       {/* <PieChart/> */}
//       {/* <ExPieChart/> */}
//       <Admin/>
//       {/* <BarChart/> */}
//       {/* <DashBoard/> */}
//       {/* <CarServices/> */}
//       {/* <LoginForm/> */}
//       {/* <SignUpForm/>  */}
//       {/* <CRUDop/> */}
//       {/* <LoginSignup/> */}
//       {/* <OurCarsComponent/> */}
     
//     {/* <ContactUs/> */}
//     <ContactForm/>
//     {/* <AboutComponenet/>
//     <ServiceComponenet/> */}
//     </div>
//   );
// };

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Admin from "./pages/Admin";


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Admin />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
