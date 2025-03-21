// donut chart
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 8000;

// Enable CORS
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // Change as per your MySQL user
    password: "root123",       // Add your MySQL password if any
    database: "b_sale", // Change to your actual database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL database!");
    }
});

// Fetch Sales Data from MySQL
app.get("/user", (req, res) => {
    const query = "SELECT Sname, Series FROM sale"; // Adjust the table name if needed
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching data:", err);
            return res.status(500).json({ error: "Database query failed" });
        }
        res.json(results);
    });
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
