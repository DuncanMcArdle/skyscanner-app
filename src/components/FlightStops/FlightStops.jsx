import React from 'react';
import PropTypes from 'prop-types';

import STYLES from './FlightStops.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

export default function FlightStops({ numberOfStops }) {
  // Determine the text and class required to show the number of stops
  let targetClass = 'flight-stops__direct';
  let targetText = 'Direct';
  if (numberOfStops > 0) {
    targetClass = 'flight-stops__indirect';
    targetText = `${numberOfStops} ${numberOfStops > 1 ? 'Stops' : 'Stop'}`;
  }

  return <div className={getClassName(targetClass)}>{targetText}</div>;
}

FlightStops.propTypes = {
  numberOfStops: PropTypes.number.isRequired,
};
