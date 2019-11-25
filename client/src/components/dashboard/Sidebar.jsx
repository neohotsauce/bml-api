import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => {
  return (
    <div className="dashboard-side-bar">
      <div className="border-right-line text-center">
        <div className="s-font logo">
          <h4 className="p-color">
            <span className="p-color">S</span>
            <span className="s-color">B</span>
          </h4>
        </div>
        <div className="icon">
          <i className="fas fa-th-large" />
        </div>
        <div className="icon">
          <i className="far fa-calendar-check" />
        </div>
        <div className="icon">
          <i className="fas fa-exchange-alt" />
        </div>
        <div className="icon active">
          <i className="fas fa-history" />
        </div>
        <div className="icon">
          <i className="fas fa-user-friends" />
        </div>
        <div className="icon">
          <i className="fas fa-cog" />
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
