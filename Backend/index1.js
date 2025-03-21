const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",  // Change to your MySQL username
  password: "root123",  // Change to your MySQL password
  database: "CarBooking",
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Get all bookings
app.get("/bookings", (req, res) => {
  db.query("SELECT * FROM bookings", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Book a car
app.post("/book", (req, res) => {
  const carName = req.body.carName;
  db.query("INSERT INTO bookings (car_name, status) VALUES (?, 'Booked')", [carName], (err) => {
    if (err) throw err;
    res.json({ message: "Car booked successfully!" });
  });
});

// Cancel a booking
app.put("/cancel/:id", (req, res) => {
  const id = req.params.id;
  db.query("UPDATE bookings SET status = 'Canceled' WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "Booking canceled successfully!" });
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
