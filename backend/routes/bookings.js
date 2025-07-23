import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Get all bookings (only pending for queue display)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find({ status: "PENDING" }).sort({ 
      isActive: -1, // active customer first (true = 1, false = 0, so -1 puts true first)
      appointmentTime: 1,
      type: 1, // online bookings first (alphabetically 'online' comes before 'walk-in')
      createdAt: 1 // then by booking order
    });
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
      error: error.message,
    });
  }
});

// Get daily statistics
router.get("/stats/:date", async (req, res) => {
  try {
    const { date } = req.params;

    // Get total bookings for the date
    const totalBookings = await Booking.countDocuments({
      appointmentDate: date
    });

    // Get completed bookings for the date
    const completedBookings = await Booking.countDocuments({
      appointmentDate: date,
      status: "COMPLETED"
    });

    // Get pending bookings for the date
    const pendingBookings = await Booking.countDocuments({
      appointmentDate: date,
      status: "PENDING"
    });

    res.status(200).json({
      success: true,
      data: {
        date: date,
        totalBookings,
        completedBookings,
        pendingBookings
      }
    });
  } catch (error) {
    console.error("Stats fetch error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch daily statistics",
      error: error.message,
    });
  }
});

// Check availability for a specific date
router.get("/availability/:date", async (req, res) => {
  try {
    const { date } = req.params;

    // Get all online bookings for the specified date
    const onlineBookings = await Booking.find({
      appointmentDate: date,
      type: "online",
    });

    // Extract booked time slots
    const bookedSlots = onlineBookings.map(
      (booking) => booking.appointmentTime
    );

    res.status(200).json({
      success: true,
      data: {
        date: date,
        bookedSlots: bookedSlots,
      },
    });
  } catch (error) {
    console.error("Availability check error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to check availability",
      error: error.message,
    });
  }
});

// Create new booking
router.post("/", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      email,
      serviceType,
      appointmentDate,
      appointmentTime,
      type,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !email ||
      !serviceType ||
      !appointmentDate ||
      !appointmentTime
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Check if time slot is already booked by another online booking
    if (type === "online") {
      const existingOnlineBooking = await Booking.findOne({
        appointmentDate,
        appointmentTime,
        type: "online",
      });

      if (existingOnlineBooking) {
        return res.status(409).json({
          success: false,
          message:
            "This time slot is already booked. Please select another time.",
        });
      }
    }

    // Generate a unique booking reference (e.g., using timestamp and random string)
    const bookingReference = `${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 6)
      .toUpperCase()}`;

    const booking = new Booking({
      firstName,
      lastName,
      phone,
      email,
      serviceType,
      appointmentDate,
      appointmentTime,
      bookingReference,
      type,
    });

    await booking.save();
    console.log("BOOKING SAVED");
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message,
    });
  }
});

// Delete a booking
router.delete("/", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Booking ID is required",
      });
    }

    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
      data: deletedBooking,
    });
  } catch (error) {
    console.error("Booking deletion error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete booking",
      error: error.message,
    });
  }
});

// Update booking status
router.put("/", async (req, res) => {
  try {
    const { id, status } = req.body;

    // Validate required fields
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Booking ID is required",
      });
    }

    if (!status || !["PENDING", "COMPLETED", "CANCELLED"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status. Must be PENDING, COMPLETED, or CANCELLED",
      });
    }

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking status updated successfully",
      data: updatedBooking,
    });
  } catch (error) {
    console.error("Booking update error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update booking status",
      error: error.message,
    });
  }
});

// Set active customer
router.put("/active", async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Booking ID is required",
      });
    }

    // First, set all bookings to inactive
    await Booking.updateMany({}, { isActive: false });

    // Then set the specified booking as active
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { isActive: true },
      { new: true, runValidators: true }
    );

    if (!updatedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Active customer updated successfully",
      data: updatedBooking,
    });
  } catch (error) {
    console.error("Active customer update error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update active customer",
      error: error.message,
    });
  }
});



export default router;
