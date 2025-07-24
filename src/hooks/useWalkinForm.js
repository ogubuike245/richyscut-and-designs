import { useState } from 'react';
import { createBooking } from '../api';
import { toast } from 'react-toastify';

export const useWalkinForm = (refreshQueue) => {
  const [walkinForm, setWalkinForm] = useState({
    firstName: "",
    lastName: "",
    serviceType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWalkinForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setWalkinForm({
      firstName: "",
      lastName: "",
      serviceType: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const currentDate = new Date();
      const walkinData = {
        firstName: walkinForm.firstName,
        lastName: walkinForm.lastName,
        phone: "N/A",
        email: "N/A",
        serviceType: walkinForm.serviceType,
        appointmentDate: currentDate.toISOString().split("T")[0],
        appointmentTime: currentDate.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        type: "walk-in",
        status: "PENDING",
      };

      await createBooking(walkinData);
      resetForm();
      refreshQueue();
      toast.success("Walk-in customer added successfully!");
    } catch (error) {
      console.error("Error adding walk-in customer:", error);
      toast.error("Failed to add walk-in customer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    walkinForm,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};