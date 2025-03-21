import React from "react";
import Chart from "react-apexcharts";

export default function Dashboard() {
  const donutChartOptions = {
    chart: { type: "donut" },
    labels: ["Total Sales", "Campaign Send", "Daily Sales"],
    colors: ["#4fc6e1", "#6658dd", "#ebeff2"],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: { show: false }
          }
        }
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
  };
  const donutChartSeries = [12, 30, 20];

  const barChartOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { columnWidth: "40%" } },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    colors: ["#00acc1"]
  };
  const barChartSeries = [{ name: "Statistics", data: [87, 75, 50, 75, 50, 38, 72] }];

  const areaChartOptions = {
    chart: { type: "area", toolbar: { show: false } },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth" },
    xaxis: {
      categories: ["2012", "2013", "2014", "2015", "2016", "2017", "2018"],
    },
    colors: ["#008FFB", "#00E396"],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => value,
      },
    },
  };
  const areaChartSeries = [
    { name: "Litecoin", data: [10, 65, 35, 50, 80, 40, 90] },
    { name: "Bitcoin", data: [15, 75, 45, 60, 100, 50, 110] }
  ];

  return (
    <div className="row">
      <div className="col-xl-4 col-md-6">
    <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Donut Chart Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Lifetime Sales</h2>
            <div className="flex space-x-2 text-gray-500 cursor-pointer">
              <span>&#x21bb;</span>
              <span>&#x2715;</span>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <div className="text-center">
              <h3 className="text-xl font-bold">3,487</h3>
              <p className="text-gray-500 text-sm">Total Sales</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">814</h3>
              <p className="text-gray-500 text-sm">Open Campaign</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold">5,324</h3>
              <p className="text-gray-500 text-sm">Daily Sales</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <Chart options={donutChartOptions} series={donutChartSeries} type="donut" height={250} />
          </div>
        </div>

        {/* Bar Chart Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-700">Statistics</h2>
              <div className="flex space-x-2 text-gray-500 cursor-pointer">
                <span>&#x21bb;</span>
                <span>&#x2715;</span>
              </div>
            </div>
            <div className="flex justify-around mt-4">
              <div className="text-center">
                <h3 className="text-xl font-bold">1,284</h3>
                <p className="text-gray-500 text-sm">Total Sales</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold">7,841</h3>
                <p className="text-gray-500 text-sm">Open Campaign</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <Chart options={barChartOptions} series={barChartSeries} type="bar" height={250} />
            </div>
          </div>

        {/* Area Chart Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-700">Income Amounts</h2>
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
          <div className="mt-4 flex justify-center">
            <Chart options={areaChartOptions} series={areaChartSeries} type="area" height={250} />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}