const express = require("express");
const router = express.Router();

// Placeholder AI response
router.post("/", (req, res) => {
    const { message } = req.body;
    res.json({ reply: `AI says: You asked about "${message}". Contact Engineer Mwaura for details.` });
});

module.exports = router;
