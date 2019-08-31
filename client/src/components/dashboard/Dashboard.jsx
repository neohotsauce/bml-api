import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Sidebar from './Sidebar';
import Topnav from './Topnav';

const Dashboard = props => {
  return (
    <Fragment>
      <div className="l-bg-wrapper">
        <Sidebar />
        <div className="d-flex-wrap">
          <Topnav />
          <div className="flex-break" />
          <div className="dashboard-content">
            <h4>
              Good Morning,
              <span className="p-color"> Haneen</span>
            </h4>
            <div className="flex-break" />
            <div className="dashboard-data">
              <div className="dashboard-accounts">
                <small>Accounts</small>
                <div className="account d-flex-wrap">
                  <div className="mr-auto">
                    <small>Balance</small>
                    <h5 className="green-color font-weight-bold">MVR 245</h5>
                    <h5 className="mb-0">
                      <i className="far fa-newspaper mr-3" />
                      <i className="fas fa-history mr-3" />
                      <i className="fas fa-exchange-alt mr-3" />
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
