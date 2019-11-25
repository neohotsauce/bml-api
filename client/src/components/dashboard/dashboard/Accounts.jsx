import React from 'react';
import PropTypes from 'prop-types';

const Accounts = props => {
  return (
    <div>
      <div className="dashboard-accounts">
        <small>Accounts</small>
        <div className="account d-flex-wrap mb-2">
          <div className="mr-auto">
            <small>Balance</small>
            <h5 className="green-color font-weight-bold">MVR 245</h5>
            <h5 className="mb-0">
              <i className="far fa-newspaper mr-4" />
              <i className="fas fa-history mr-4" />
              <i className="fas fa-exchange-alt" />
            </h5>
          </div>
          <div className="ml-auto">
            <p className="blue-color mb-1">Current Account</p>
            <small>Account No.</small>
            <p className="font-weight-bold mb-0">77067778010</p>
          </div>
        </div>
        <div className="account d-flex-wrap mb-2">
          <div className="mr-auto">
            <small>Balance</small>
            <h5 className="green-color font-weight-bold">$ 1,489.75</h5>
            <h5 className="mb-0">
              <i className="far fa-newspaper mr-4" />
              <i className="fas fa-history mr-4" />
              <i className="fas fa-exchange-alt" />
            </h5>
          </div>
          <div className="ml-auto">
            <p className="blue-color mb-1">Savings Account</p>
            <small>Account No.</small>
            <p className="font-weight-bold mb-0">77067898986</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Accounts.propTypes = {};

export default Accounts;
