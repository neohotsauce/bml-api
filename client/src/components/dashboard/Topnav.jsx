import React from 'react';
import PropTypes from 'prop-types';

const Topnav = props => {
  return (
    <div className="top-nav">
      <div className="directory d-flex mr-auto">
        <small className="my-auto">
          <i className="fas fa-chevron-left mr-2" />
          Dashboard
        </small>
      </div>
      <div className="logo d-flex s-font m-auto">
        <h4 className="p-color m-auto">
          <span className="p-color">Swift</span>
          <span className="s-color">Bml</span>
        </h4>
      </div>
      <div className="d-flex ml-auto">
        <p className="d-inline-block my-auto">Haneen</p>
        <h5 className="d-inline-block my-auto ml-3">
          <i className="far fa-bell" />
        </h5>
        <h5 className="d-inline-block my-auto ml-3">
          <i className="fas fa-ellipsis-v" />
        </h5>
      </div>
    </div>
  );
};

Topnav.propTypes = {};

export default Topnav;
