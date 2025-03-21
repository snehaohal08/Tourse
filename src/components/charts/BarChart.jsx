import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";

const Booking = () => {
  const [bookings, setBookings] = useState([]);

  // Fetch bookings from backend
  useEffect(() => {
    axios.get("http://localhost:5000/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  // Book a new car
  const bookCar = () => {
    const carName = "Car " + (bookings.length + 1);
    axios.post("http://localhost:5000/book", { carName }).then(() => {
      setBookings([...bookings, { id: bookings.length + 1, car_name: carName, status: "Booked" }]);
    });
  };

  // Cancel a booking
  const cancelBooking = (id) => {
    axios.put(`http://localhost:5000/cancel/${id}`).then(() => {
      setBookings(bookings.map(b => (b.id === id ? { ...b, status: "Canceled" } : b)));
    });
  };

  // Count booked and canceled cars
  const bookedCount = bookings.filter(b => b.status === "Booked").length;
  const canceledCount = bookings.filter(b => b.status === "Canceled").length;

  // ApexCharts config
  const chartOptions = {
    series: [bookedCount, canceledCount],
    options: {
      chart: { type: "donut" },
      labels: ["Booked", "Canceled"],
      colors: ["#4CAF50", "#FF5733"],
      legend: { position: "bottom" },
    },
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Car Booking System</h2>
      
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 w-full hover:bg-blue-600"
        onClick={bookCar}
      >
        Book Car
      </button>

      <h3 className="text-xl font-semibold mb-2">Bookings</h3>
      <ul className="space-y-2">
        {bookings.map(b => (
          <li key={b.id} className={`p-3 rounded-md ${b.status === "Booked" ? "bg-green-100" : "bg-red-100"}`}>
            {b.car_name} - <span className="font-semibold">{b.status}</span>
            {b.status === "Booked" && (
              <button 
                className="ml-4 bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600"
                onClick={() => cancelBooking(b.id)}
              >
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
