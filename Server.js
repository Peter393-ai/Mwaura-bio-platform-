const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const aiRoutes = require("./routes/ai");
const mpesaRoutes = require("./routes/mpesa");
const appointmentsRoutes = require("./routes/appointments");
const equipmentRoutes = require("./routes/equipment");
const staffRoutes = require("./routes/staff");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/ai", aiRoutes);
app.use("/api/mpesa", mpesaRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/staff", staffRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
