import React from "react";
import { useDailyStats } from "../hooks/useDailyStats";
import { useWalkinForm } from "../hooks/useWalkinForm";
import { useBookingOperations } from "../hooks/useBookingOperations";
import { DashboardHeaderWithActions, DailyStatsDisplaySection, WaitlistManagementSection, WalkinCustomerFormSection } from "../components/dashboard";
import "../assets/css/Dashboard.css";

const Dashboard = ({
  currentQueue,
  refreshQueue,
  isQueueLoading = false,
}) => {
  // Custom hooks for business logic
  const { dailyStats, statsLoading } = useDailyStats(currentQueue);
  const { walkinForm, isSubmitting, handleInputChange, handleSubmit, resetForm } = useWalkinForm(refreshQueue);
  const bookingOperations = useBookingOperations(refreshQueue);
  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-container">
          <DashboardHeaderWithActions onRefresh={refreshQueue} />
          
          <DailyStatsDisplaySection 
            dailyStats={dailyStats} 
            statsLoading={statsLoading} 
          />

          <div className="dashboard-grid">
            <WaitlistManagementSection 
              currentQueue={currentQueue} 
              bookingOperations={bookingOperations}
              isLoading={isQueueLoading}
            />
            
            <WalkinCustomerFormSection 
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
