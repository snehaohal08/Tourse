// const express = require('express');
// const mysql = require('mysql2');  // Change 'mysql' to 'mysql2'
// const cors = require('cors');

// const app = express();

// // MySQL Connection
// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "root123",
//     database: "emp_login"

// });

// db.connect((err) => {
//     if (err) {
//         console.error("Database connection failed: ", err);
//     } else {
//         console.log("Connected to MySQL");
//     }
// });

// app.use(express.json());
// app.use(cors());

// app.listen(3001, () => {
//     console.log("Server is running on port 3001");
// });

// // Routes
// app.post('/create', (req, res) => {
//     const { M_no, Password } = req.body;

//     db.query(
//         'INSERT INTO employee (M_no, Password) VALUES (?, ?)',
//         [M_no, Password],
//         (err, result) => {
//             if (err) {
//                 console.error("Values not inserted successfully", err);
//                 res.status(500).send("Error inserting values");
//             } else {
//                 res.send("The values are inserted successfully");
//             }
//         }
//     );
// });

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root123",
    database: "car"
});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed: ", err);
    } else {
        console.log("Connected to MySQL");
    }
});

// Get all car bookings
app.get("/car", (req, res) => {
    const q = "SELECT * FROM car_book";
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

// Add a new car booking
app.post('/car', (req, res) => {
    const { Car_name, Price } = req.body;

    if (!Car_name || !Price) {
        return res.status(400).json({ error: "Car_name and Price are required" });
    }

    const q = "INSERT INTO car_book (Car_name, Price) VALUES (?, ?)";
    
    db.query(q, [Car_name, Price], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json({ message: "Data inserted successfully", data });
    });
});

// Root route
app.get("/", (req, res) => {
    res.json("Hello, this is the backend....");
});

// Start the server
app.listen(4000, () => {
    console.log("Server Running at port 4000......");
});
