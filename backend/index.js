const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();


// ✅ CORS middleware
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Connect DB
connectDB();

// ✅ Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server working fine!");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
