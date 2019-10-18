import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FriendsEvents = props => {
  return (
    <Fragment>
      <small>Friends&apos; events</small>
      <div className="event-wrapper">
        <div className="event d-flex-wrap">
          <div className="mr-auto">
            <p className="font-weight-bold mb-2">Avengers Movie</p>
            <div className="flex-break" />
            <small>
              <span className="font-weight-bold">My payment: </span>
              <span> MVR </span>
            </small>
            <p className="font-weight-bold d-inline-block green-color mb-0">
              {' '}
              100
            </p>
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

FriendsEvents.propTypes = {};

export default FriendsEvents;
