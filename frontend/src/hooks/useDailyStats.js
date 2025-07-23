import { useState, useEffect } from 'react';
import { getDailyStats } from '../api';

export const useDailyStats = (currentQueue) => {
  const [dailyStats, setDailyStats] = useState({
    totalBookings: 0,
    completedBookings: 0,
    pendingBookings: 0
  });
  const [statsLoading, setStatsLoading] = useState(true);

  const fetchDailyStats = async () => {
    try {
      setStatsLoading(true);
      const today = new Date().toISOString().split('T')[0];
      const result = await getDailyStats(today);
      if (result.success) {
        setDailyStats(result.data);
      }
    } catch (error) {
      console.error("Error fetching daily stats:", error);
    } finally {
      setStatsLoading(false);
    }
  };

  useEffect(() => {
    fetchDailyStats();
  }, [currentQueue]);

  return { dailyStats, statsLoading, fetchDailyStats };
};