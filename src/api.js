// src/api.js
// API utility for interacting with the backend booking system

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

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
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function checkAvailability(date) {
  try {
    console.log(
      "[api.js] Checking availability for date:",
      date
    );
    const response = await fetch(`${API_BASE_URL}/bookings/availability/${date}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to check availability");
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteBooking(bookingId) {
  try {
    console.log("[api.js] Deleting booking with ID:", bookingId);
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: bookingId }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to delete booking");
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateBookingStatus(bookingId, status) {
  try {
    console.log("[api.js] Updating booking status:", bookingId, "to", status);
    const response = await fetch(`${API_BASE_URL}/bookings`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: bookingId, status }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to update booking status");
    }
    return data;
  } catch (error) {
    throw error;
  }
}

export async function setActiveCustomer(bookingId) {
  try {
    console.log("[api.js] Setting active customer:", bookingId);
    const response = await fetch(`${API_BASE_URL}/bookings/active`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: bookingId }),
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to set active customer");
    }
    return data;
  } catch (error) {
    throw error;
  }
}



export async function getDailyStats(date) {
  try {
    console.log("[api.js] Fetching daily stats for date:", date);
    const response = await fetch(`${API_BASE_URL}/bookings/stats/${date}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch daily statistics");
    }
    return data;
  } catch (error) {
    throw error;
  }
}
