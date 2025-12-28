const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  vehicleType: {
    type: String,
    enum: ["car", "bike", "bus", "walking"],
    required: true
  },

  numberPlate: {
    type: String,
    required: true,
    unique: true
  },

  lastLocation: {
    lat: Number,
    lng: Number
  },

  speed: {
    type: Number,
    default: 0
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
