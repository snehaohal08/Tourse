const express = require('express');
const router = new express.Router();
const conn = require("../db/connection");
const { log } = require('console');



// constct user data
router.post('/create', (req, res) => {
    const { Username, Email, Message, Subject } = req.body;

    if (!Username || !Email || !Message || !Subject) {
        return res.status(422).json({ success: false, message: "Please fill all the data" });
    }

    try {
        conn.query("SELECT * FROM shree.contact WHERE Email = ?", [Email], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(500).json({ success: false, message: "Database error" });
            }

            if (result.length) {
                return res.status(422).json({ success: false, message: "This data already exists" });
            }

            conn.query(
                "INSERT INTO shree.contact SET ?",
                { Username, Email, Message, Subject },
                (err, result) => {
                    if (err) {
                        console.error("Insert error:", err);
                        return res.status(500).json({ success: false, message: "Error inserting data" });
                    }

                    res.status(201).json({ success: true, message: "Data added successfully", data: req.body });
                }
            );
        });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});


module.exports = router;