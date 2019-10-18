import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const MyEvents = props => {
  return (
    <Fragment>
      <small>My events</small>
      <div className="event-wrapper mb-4">
        <div className="event d-flex-wrap">
          <div className="mr-auto">
            <p className="font-weight-bold mb-2">Avengers Movie</p>
            <div className="flex-break" />
            <small>
              <span className="font-weight-bold">Payment: </span>
              <span> MVR </span>
            </small>
            <p className="font-weight-bold d-inline-block p-color mb-0"> 100</p>
            <small> | MVR 400</small>
          </div>
          <div className="ml-auto">
            <div className="friend-group d-flex">
              <div className="wh-30px w-color p-bg rounded-circle text-center">
                A
              </div>
              <div className="wh-30px w-color s-bg rounded-circle text-center">
                S
              </div>
              <div className="wh-30px w-color p-bg rounded-circle text-center">
                F
              </div>
            </div>
            <div className="flex-break" />
            <small>Due March 17th</small>
          </div>
        </div>
        <hr className="flex-break" />
        <div className="event d-flex-wrap">
          <div className="mr-auto">
            <p className="font-weight-bold mb-2">Europe trip</p>
            <div className="flex-break" />
            <small>
              <span className="font-weight-bold">Payment: </span>
              <span> MVR </span>
            </small>
            <p className="font-weight-bold d-inline-block p-color mb-0"> 100</p>
            <small> | MVR 400</small>
          </div>
          <div className="ml-auto">
            <div className="friend-group d-flex">
              <div className="wh-30px w-color p-bg rounded-circle text-center">
                A
              </div>
              <div className="wh-30px w-color s-bg rounded-circle text-center">
                S
              </div>
              <div className="wh-30px w-color p-bg rounded-circle text-center">
                F
              </div>
            </div>
            <div className="flex-break" />
            <small>Due March 17th</small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

MyEvents.propTypes = {};

export default MyEvents;
