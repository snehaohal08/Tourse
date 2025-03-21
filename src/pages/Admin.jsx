import { FiLogOut } from "react-icons/fi";
import { TbBrandBooking } from "react-icons/tb";

import React, { useState, useEffect } from "react";
import {
  FiHome,
  // FiCalendar,
  // FiMessageSquare,
  // FiShoppingCart,
  FiUsers,
  // FiMail,
  // FiFolder,
  // FiFileText,
    
  FiMenu,
  
} from "react-icons/fi";
import Chart from "react-apexcharts";

export default function Admin() {
  const [active, setActive] = useState("Dashboards");
  const [B_sales, setB_Sales] = useState([]);
  const [B_saleSeries, setB_SaleSeries] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const getSalesData = async () => {
      try {
        const reqData = await fetch("http://localhost:8000/user");
        const resData = await reqData.json();
        console.log(resData);

        const Sale = resData.map((item) => item.Sname);
        const series = resData.map((item) => Number(item.Series));

        setB_Sales(Sale);
        setB_SaleSeries(series);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    getSalesData();
  }, []);
  const handleLogout = () => {
    // Add logout logic here (clear tokens, redirect, etc.)
    console.log("User logged out");
    alert("Logged out successfully!");
    // Redirect to login page (adjust wbased on your routing setup)
    window.location.href = "/"; 
  };

  const menuItems = [
    { name: "Dashboards", icon: <FiHome /> },
    { name: "Booking", icon: <TbBrandBooking /> },
    { name: "Users", icon: <FiUsers /> },
    { name: "Logout", icon: <FiLogOut />, onClick: handleLogout },
];


  const donutChartOptions = {
    chart: { type: "donut" },
    labels: B_sales,
    colors: ["#4fc6e1", "#6658dd", "#ff9f43", "#ff3f34"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: { show: true, label: "Total" },
          },
        },
      },
    },
    legend: { show: true, position: "bottom" },
    dataLabels: { enabled: false },
  };

  const areaChartOptions = {
    chart: { type: "area" },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    colors: ["#4fc6e1", "#ff9f43"],
  };

  const areaChartSeries = [
    { name: "Revenue", data: [300, 400, 500, 600, 700, 800] },
    { name: "Profit", data: [100, 200, 300, 400, 500, 600] },
  ];

  return (
    
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-white text-gray shadow-lg h-screen p-5 transition-all duration-300 ease-in-out transform ${
          sidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"
        } md:w-64 md:translate-x-0`}
        style={{ zIndex: 50 }}
      >
        
<div className="flex justify-center mb-6">
  <img src="images/ShreeLogo.png" alt="Travel Logo" className="h-20 w-auto" />
</div>
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-indigo-100 ${
                active === item.name ? "bg-indigo-200 font-bold" : ""
              }`}
              onClick={() => setActive(item.name)}
            >
              <div className="flex items-center space-x-3 text-indigo-600">
                {item.icon}
                <span>{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-5 md:p-10">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl mb-4 p-2 bg-white rounded-lg shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu />
        </button>

        {/* Sales & Income Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lifetime Sales with Donut Chart */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Lifetime Sales
              </h2>
              <div className="flex space-x-2 text-gray-500 cursor-pointer">
                <span>&#x21bb;</span>
                <span>&#x2715;</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-indigo-600">3,487</h3>
                <p className="text-gray-500 text-sm">Total Sales</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-green-600">814</h3>
                <p className="text-gray-500 text-sm">Open Campaign</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-600">5,324</h3>
                <p className="text-gray-500 text-sm">Daily Sales</p>
              </div>
            </div>

            {/* Donut Chart */}
            {B_sales.length > 0 && B_saleSeries.length > 0 ? (
              <Chart
                options={donutChartOptions}
                series={B_saleSeries}
                type="donut"
                height={250}
                width="100%"
              />
            ) : (
              <p className="text-center text-gray-500">Loading chart data...</p>
            )}
          </div>

          {/* Income Amounts with Area Chart */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">
                Income Amounts
              </h2>
              <div className="flex space-x-2 text-gray-500 cursor-pointer">
                <span>&#x21bb;</span>
                <span>&#x2715;</span>
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <div className="text-center">
                <h3 className="text-xl font-bold">2,845</h3>
                <p className="text-gray-500 text-sm">Total Sales</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">6,487</h3>
                <p className="text-gray-500 text-sm">Open Campaign</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">201</h3>
                <p className="text-gray-500 text-sm">Daily Sales</p>
              </div>
            </div>

            {/* Area Chart */}
            <div className="mt-4 flex justify-center">
              <Chart
                options={areaChartOptions}
                series={areaChartSeries}
                type="area"
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
