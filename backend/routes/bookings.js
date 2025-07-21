const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch bookings', error: error.message });
  }
});

// Create new booking
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, phone, email, serviceType, appointmentDate, appointmentTime } = req.body;
    if (!firstName || !lastName || !phone || !email || !serviceType || !appointmentDate || !appointmentTime) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }
    // Generate a unique booking reference (e.g., using timestamp and random string)
    const bookingReference = `${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const booking = new Booking({ firstName, lastName, phone, email, serviceType, appointmentDate, appointmentTime, bookingReference });
    await booking.save();
    res.status(201).json({ success: true, message: 'Booking created successfully', data: booking });
  } catch (error) {
    console.error('Booking creation error:', error);
    res.status(500).json({ success: false, message: 'Failed to create booking', error: error.message });
  }
});

module.exports = router;