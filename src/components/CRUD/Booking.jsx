import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [chartData, setChartData] = useState([0, 0]); // Dynamic chart data

  const bookCar = (carName) => {
    if (bookings.length < 10) {
      setBookings([...bookings, { id: bookings.length + 1, carName, status: "Booked" }]);
    } else {
      alert("Booking limit reached!");
    }
  };

  const cancelBooking = (id) => {
    setBookings(bookings.map(b => (b.id === id ? { ...b, status: "Canceled" } : b)));
  };

  // Update chart dynamically
  useEffect(() => {
    const bookedCount = bookings.filter(b => b.status === "Booked").length;
    const canceledCount = bookings.filter(b => b.status === "Canceled").length;
    setChartData([bookedCount, canceledCount]);
  }, [bookings]);

  const chartOptions = {
    series: chartData,
    options: {
      chart: { type: "donut" },
      labels: ["Booked", "Canceled"],
      colors: ["#4CAF50", "#FF5733"], // Green for booked, Red for canceled
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Car Booking System</h2>
      
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 w-full hover:bg-blue-600"
        onClick={() => bookCar("Car " + (bookings.length + 1))}
      >
        Book Car
      </button>

      <h3 className="text-xl font-semibold mb-2">Bookings</h3>
      <ul className="space-y-2">
        {bookings.map(b => (
          <li key={b.id} className={`p-3 rounded-md ${b.status === "Booked" ? "bg-green-100" : "bg-red-100"}`}>
            <span className="font-bold">ID:</span> {b.id} | 
            <span className="font-bold"> Car:</span> {b.carName} | 
            <span className="font-semibold"> {b.status}</span>
            {b.status === "Booked" && (
              <button className="ml-4 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600" onClick={() => cancelBooking(b.id)}>
                Cancel
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Donut Chart */}
      <div className="flex justify-center mt-6">
        <Chart options={chartOptions.options} series={chartOptions.series} type="donut" width="300" />
      </div>
    </div>
  );
};

export default Booking;
