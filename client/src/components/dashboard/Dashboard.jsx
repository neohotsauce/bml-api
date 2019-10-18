import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import Sidebar from './Sidebar';
import Topnav from './Topnav';
import Accounts from './dashboard/Accounts';
import Events from './dashboard/Events';

import 'jquery-circle-progress/dist/circle-progress';

const Dashboard = props => {
  $('#circle').circleProgress({
    value: 0.75,
    size: 140,
    fill: {
      color: '#5bceae'
    },
    lineCap: 'round',
    thickness: 7,
    startAngle: 0
  });
  $('#circle2').circleProgress({
    value: 0.25,
    size: 115,
    fill: {
      color: '#ec547a'
    },
    lineCap: 'round',
    thickness: 7,
    startAngle: 0
  });
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
              <Accounts />
              <Events />
              <div className="activity-wrapper">
                <small>Activity</small>
                <div className="activity-summary d-flex-wrap">
                  <div className="d-flex-wrap">
                    <p className="mr-auto font-weight-bold">Wallet activity</p>
                    <div className="ml-auto">
                      <small>
                        <span className="p-color">Weekly</span>
                        <span> | Monthly</span>
                      </small>
                    </div>
                  </div>
                  <div className='flex-break' />
                  <div id="circle" className="w-100 text-center">
                    <div id="circle2" />
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
