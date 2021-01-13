import React from 'react';
import BpkImage from 'bpk-component-image';
import PropTypes from 'prop-types';

import arrowIcon from '../../assets/arrow.svg';
import formatTime from '../../utils/format-time';
import formatDuration from '../../utils/format-duration';
import FlightStops from '../FlightStops';

import STYLES from './FlightLeg.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

export default function FlightLeg({
  departureAirport,
  departureTime,
  arrivalAirport,
  arrivalTime,
  numberOfStops,
  airlineID,
  airlineName,
  duration,
}) {
  return (
    <div data-testid="flight-leg" className={getClassName('flight-leg')}>
      {/* Airline icon */}
      <BpkImage
        src={`https://logos.skyscnr.com/images/airlines/favicon/${airlineID}.png`}
        altText={`${airlineName} logo`}
        className={getClassName('flight-leg__carrier-logo')}
        aspectRatio={1 / 1}
        borderRadiusStyle="sm"
      />

      {/* Departure */}
      <div className={getClassName('flight-leg__point')}>
        <div className={getClassName('flight-leg__time')}>
          {formatTime(departureTime)}
        </div>
        <div className={getClassName('flight-leg__airport')}>
          {departureAirport}
        </div>
      </div>

      {/* Arrow icon */}
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className={getClassName('flight-leg__arrow-icon')}
      />

      {/* Arrival */}
      <div className={getClassName('flight-leg__point')}>
        <div className={getClassName('flight-leg__time')}>
          {formatTime(arrivalTime)}
        </div>
        <div className={getClassName('flight-leg__airport')}>
          {arrivalAirport}
        </div>
      </div>

      {/* Additional details */}
      <div className={getClassName('flight-leg__details')}>
        <div className={getClassName('flight-leg__duration')}>
          {formatDuration(duration)}
        </div>
        <FlightStops numberOfStops={numberOfStops} />
      </div>
    </div>
  );
}

FlightLeg.propTypes = {
  departureAirport: PropTypes.string.isRequired,
  departureTime: PropTypes.string.isRequired,
  arrivalAirport: PropTypes.string.isRequired,
  arrivalTime: PropTypes.string.isRequired,
  numberOfStops: PropTypes.number.isRequired,
  airlineID: PropTypes.string.isRequired,
  airlineName: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};
