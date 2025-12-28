require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require("http");

const connectDB = require("./src/config/db");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("🚦 RoadGuard Backend Running");
});

connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
