const express = require("express");
const router = express.Router();

// Placeholder M-Pesa STK Push
router.post("/", (req, res) => {
    const { phone, amount } = req.body;
    res.json({ status: "success", message: `Simulated M-Pesa payment of KES ${amount} from ${phone}` });
});

module.exports = router;
