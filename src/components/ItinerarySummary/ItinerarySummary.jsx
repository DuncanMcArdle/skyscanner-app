import React from 'react';
import BpkButton from 'bpk-component-button';
import PropTypes from 'prop-types';

import STYLES from './ItinerarySummary.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

export default function ItinerarySummary({ price, agent }) {
  return (
    <div className={getClassName('itinerary-summary')}>
      <div className={getClassName('itinerary-summary__details')}>
        <div className={getClassName('itinerary-summary__price')}>{price}</div>
        <div className={getClassName('itinerary-summary__agent')}>{agent}</div>
      </div>
      <BpkButton>Select</BpkButton>
    </div>
  );
}

ItinerarySummary.propTypes = {
  price: PropTypes.string.isRequired,
  agent: PropTypes.string.isRequired,
};
