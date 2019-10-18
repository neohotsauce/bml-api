import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import MyEvents from './events/MyEvents';
import FriendsEvents from './events/FriendsEvents';

const Events = props => {
  return (
    <div className="dashboard-events">
      <MyEvents />
      <FriendsEvents />
    </div>
  );
};

Events.propTypes = {};

export default Events;
