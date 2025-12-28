const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const app = express();

// SOCKET + HTTP SERVER
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// REAL-TIME SOCKET LOGIC
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send-location", (data) => {
    socket.broadcast.emit("receive-location", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// ROUTES
const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

// DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// SERVER START
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running with sockets on port ${PORT}`);
});
