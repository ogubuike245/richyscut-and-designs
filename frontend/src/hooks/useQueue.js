import { useState, useEffect, useCallback } from "react";
import { getBookings, createBooking } from "../api";

export default function useQueue() {
  const [queue, setQueue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQueue = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await getBookings();
      if (result.success && Array.isArray(result.data)) {
        setQueue(result.data);
      } else {
        setQueue([]);
      }
    } catch (err) {
      setError(err);
      setQueue([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQueue();
    // Optionally, poll every X seconds for real-time updates
    // const interval = setInterval(fetchQueue, 10000);
    // return () => clearInterval(interval);
  }, [fetchQueue]);

  // Optionally, expose a method to add a booking and refresh
  const addBooking = async (bookingData) => {
    await createBooking(bookingData);
    await fetchQueue();
  };

  return { queue, loading, error, refresh: fetchQueue, addBooking, setQueue };
}