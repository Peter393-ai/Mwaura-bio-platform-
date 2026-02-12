const express = require("express");
const router = express.Router();

// Placeholder appointments
let appointments = [
    { patient: "John Doe", service: "MRI Scan", date: "2026-03-10", status: "Confirmed" },
    { patient: "Jane Smith", service: "CT Scan", date: "2026-03-12", status: "Pending" }
];

router.get("/", (req, res) => {
    res.json(appointments);
});

router.post("/", (req, res) => {
    appointments.push(req.body);
    res.json({ status: "success", appointments });
});

module.exports = router;
