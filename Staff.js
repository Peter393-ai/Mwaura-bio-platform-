const express = require("express");
const router = express.Router();

// Placeholder staff
let staff = [
    { name: "Alice Mwangi", role: "Biomedical Engineer" },
    { name: "James Otieno", role: "Technician" }
];

router.get("/", (req, res) => {
    res.json(staff);
});

router.post("/", (req, res) => {
    staff.push(req.body);
    res.json({ status: "success", staff });
});

module.exports = router;
