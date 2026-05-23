const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: String,
  roomId: String,
  checkIn: String,
  checkOut: String,
  totalPrice: Number,
  status: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);