import React from "react";
import { useDailyStats } from "../hooks/useDailyStats";
import { useWalkinForm } from "../hooks/useWalkinForm";
import { useBookingOperations } from "../hooks/useBookingOperations";
import DashboardHeader from "../components/DashboardHeader";
import DailyStatsSection from "../components/DailyStatsSection";
import WaitlistSection from "../components/WaitlistSection";
import WalkinFormSection from "../components/WalkinFormSection";
import "../assets/css/Dashboard.css";

const Dashboard = ({
  currentQueue,
  refreshQueue,
}) => {
  // Custom hooks for business logic
  const { dailyStats, statsLoading } = useDailyStats(currentQueue);
  const { walkinForm, isSubmitting, handleInputChange, handleSubmit, resetForm } = useWalkinForm(refreshQueue);
  const bookingOperations = useBookingOperations(refreshQueue);
  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-container">
          <DashboardHeader onRefresh={refreshQueue} />
          
          <DailyStatsSection 
            dailyStats={dailyStats} 
            statsLoading={statsLoading} 
          />

          <div className="dashboard-grid">
            <WaitlistSection 
              currentQueue={currentQueue} 
              bookingOperations={bookingOperations} 
            />
            
            <WalkinFormSection 
              walkinForm={walkinForm}
              isSubmitting={isSubmitting}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              onCancel={resetForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
