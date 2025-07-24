import { deleteBooking, updateBookingStatus, setActiveCustomer } from '../api';
import { toast } from 'react-toastify';

export const useBookingOperations = (refreshQueue) => {
  const handleDeleteBooking = async (bookingId) => {
    try {
      await deleteBooking(bookingId);
      refreshQueue();
    } catch (error) {
        console.error('Error deleting booking:', error);
        toast.error("Failed to delete booking. Please try again.");
      }
    };

  const handleServeCustomer = async (bookingId) => {
    try {
      await updateBookingStatus(bookingId, "COMPLETED");
      refreshQueue();
    } catch (error) {
        console.error('Error serving customer:', error);
        toast.error("Failed to serve customer. Please try again.");
      }
    };

  const handleSetActive = async (bookingId) => {
    try {
      await setActiveCustomer(bookingId);
      refreshQueue();
    } catch (error) {
        console.error('Error setting active customer:', error);
        toast.error("Failed to set active customer. Please try again.");
      }
    };

  return {
    handleDeleteBooking,
    handleServeCustomer,
    handleSetActive
  };
};