const express = require("express");
const router = express.Router();

// Placeholder equipment
let equipment = [
    { name: "MRI Scanner", type: "Imaging", location: "Radiology Dept.", status: "Operational" },
    { name: "Ventilator", type: "ICU", location: "ICU Ward", status: "Under Maintenance" }
];

router.get("/", (req, res) => {
    res.json(equipment);
});

router.post("/", (req, res) => {
    equipment.push(req.body);
    res.json({ status: "success", equipment });
});

module.exports = router;
