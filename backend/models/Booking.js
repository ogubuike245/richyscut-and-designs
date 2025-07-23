import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  serviceType: { type: String, required: true },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  bookingReference: { type: String, required: true, unique: true },
  type: { 
    type: String, 
    required: true, 
    enum: ['online', 'walk-in'],
    default: 'online'
  },
  status: {
    type: String,
    required: true,
    enum: ['PENDING', 'COMPLETED', 'CANCELLED'],
    default: 'PENDING'
  },
  isActive: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
