import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';

import FlightLeg from '../FlightLeg';
import ItinerarySummary from '../ItinerarySummary';

import STYLES from './Itinerary.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

export default function Itinerary({ itineraryID, legs, price, agent }) {
  return (
    <BpkCard className={getClassName('itinerary')}>
      {// Render each leg separately
      legs.map(leg => (
        <FlightLeg
          key={`${itineraryID}__${leg.id}`}
          departureAirport={leg.departure_airport}
          departureTime={leg.departure_time}
          arrivalAirport={leg.arrival_airport}
          arrivalTime={leg.arrival_time}
          numberOfStops={leg.stops}
          airlineID={leg.airline_id}
          airlineName={leg.airline_name}
          duration={leg.duration_mins}
        />
      ))}
      <ItinerarySummary price={price} agent={agent} />
    </BpkCard>
  );
}

Itinerary.propTypes = {
  itineraryID: PropTypes.string.isRequired,
  legs: PropTypes.arrayOf(Object).isRequired,
  price: PropTypes.string.isRequired,
  agent: PropTypes.string.isRequired,
};
