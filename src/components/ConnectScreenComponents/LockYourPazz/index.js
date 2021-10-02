import React from "react";

const ConnectedLockYourPazz = () => {
  return (
    <section class="lock-pazz-section">
      <div class="custom-container">
        <div class="row">
          <div class="col-md-12">
            <p class="section-heading">LOCK YOUR PAZ</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mt-3">
            <div class="lock-stat-card">
              <p class="mb-0">Current Status</p>
              <h3>Staked</h3>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div class="lock-stat-card">
              <p class="mb-0">Expires in</p>
              <h3>~ 1 month</h3>
            </div>
          </div>
          <div class="col-md-4 mt-3">
            <div class="lock-stat-card">
              <p class="mb-0">Dividend Bonus</p>
              <h3>100% Staked</h3>
            </div>
          </div>
        </div>

        <div class="reinvest-duration mt-3">
          <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
              <form class="form-inline approve-form d-flex justify-content-center mt-4">
                <label class="approve-form-label mr-3">
                  Choose your staking duration
                </label>
                <select class="form-control" is="ms-dropdown">
                  <option value="">30 days - 100% Dividends</option>
                  <option value="">15 days - 100% Dividends</option>
                  <option value="">10 days - 100% Dividends</option>
                </select>
                <input
                  type="submit"
                  class="form-control is-disabled"
                  value="Lock My Tokens"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectedLockYourPazz;
