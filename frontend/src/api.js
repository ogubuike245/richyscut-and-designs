// src/api.js
// API utility for interacting with the backend booking system

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

export async function createBooking(bookingData) {
  try {
    console.log(
      "[api.js] Sending POST to:",
      `${API_BASE_URL}/bookings`,
      "with payload:",
      bookingData
    );
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to create booking");
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getBookings() {
  try {
    const response = await fetch(`${API_BASE_URL}/bookings`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch bookings");
    }
    return data;
  } catch (error) {
    throw error;
  }
}
