export const formatDisplayName = (booking) => {
  return booking.firstName && booking.lastName
    ? `${booking.firstName.toUpperCase()} ${booking.lastName.charAt(0).toUpperCase()}.`
    : "Unknown";
};

export const formatServiceName = (booking) => {
  const serviceCodeToName = {
    ADULT_HAIRCUT: "Adult Haircut",
    BEARD_TRIM: "Beard Trim",
    KIDS_HAIRCUT: "Kids Haircut",
  };
  
  return serviceCodeToName[booking.serviceType] ||
    booking.serviceType ||
    booking.service ||
    "Service";
};

export const formatAppointmentTime = (booking) => {
  return booking.appointmentTime ||
    (booking.timestamp
      ? new Date(booking.timestamp).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      : "N/A");
};

export const getBookingStatus = (booking) => {
  return booking.isActive ? "active" : "waiting";
};

export const calculateEstimatedWaitTime = (queueLength) => {
  return queueLength > 0 ? `${queueLength * 15} min` : "0 min";
};

export const formatCurrentTime = () => {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatCurrentDateTime = () => {
  const date = new Date();
  return {
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  };
};