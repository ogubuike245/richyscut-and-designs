import React from "react";
import LoadingSpinnerIndicator from '../common/LoadingSpinnerIndicator';

const WalkinCustomerFormSection = ({
  walkinForm,
  isSubmitting,
  onInputChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <div className="dashboard-card actions-card">
      <div className="card-body">
        <div className="walkin-form">
          <h4>Add Walk-in Customer</h4>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={walkinForm.firstName}
                onChange={onInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={walkinForm.lastName}
                onChange={onInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <select
                name="serviceType"
                value={walkinForm.serviceType}
                onChange={onInputChange}
                required
                disabled={isSubmitting}
              >
                <option value="">Select Service</option>
                <option value="ADULT_HAIRCUT">Adult Haircut</option>
                <option value="BEARD_TRIM">Beard Trim</option>
                <option value="KIDS_HAIRCUT">Kids Haircut</option>
              </select>
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className={`btn-submit ${isSubmitting ? "btn-loading" : ""}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinnerIndicator size="small" color="white" />
                    <span style={{ marginLeft: "8px" }}>Adding...</span>
                  </>
                ) : (
                  "Add to Queue"
                )}
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WalkinCustomerFormSection;
