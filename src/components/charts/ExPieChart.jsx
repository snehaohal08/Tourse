import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

export default function ExPieChart() {
  const [B_sales, SetB_Sales] = useState([]);
  const [B_saleSerise, setB_SaleSerise] = useState([]);

  useEffect(() => {
    const getSalesData = async () => {
      try {
        const reqData = await fetch("http://localhost:8000/user");
        const resData = await reqData.json();
        console.log(resData);

        const Sale = resData.map(item => item.Sname);
        const series = resData.map(item => item.Series);

        SetB_Sales(Sale);
        setB_SaleSerise(series);
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    getSalesData();
  }, []);

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
    dataLabels: { enabled: true },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: { width: 300 },
          legend: { position: "bottom" },
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-700">Lifetime Sales</h2>
          <div className="flex space-x-2 text-gray-500 cursor-pointer">
            <span className="text-lg">&#x21bb;</span>
            <span className="text-lg">&#x2715;</span>
          </div>
        </div>

        <div className="grid grid-cols-3 text-center">
          <div>
            <h3 className="text-2xl font-bold">3,487</h3>
            <p className="text-gray-500 text-sm">Total Sales</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">814</h3>
            <p className="text-gray-500 text-sm">Open Campaign</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">5,324</h3>
            <p className="text-gray-500 text-sm">Daily Sales</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <Chart options={donutChartOptions} series={B_saleSerise} type="donut" height={350} width={"100%"} />
        </div>
      </div>
    </div>
  );
}
