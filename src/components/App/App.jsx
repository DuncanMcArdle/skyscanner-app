import React, { useEffect, useState } from 'react';

import Header from '../Header';
import Itinerary from '../Itinerary';

import STYLES from './App.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

function App() {
  const [renderedItineraries, setRenderedItineraries] = useState(null);

  useEffect(() => {
    // Load the supplied flight data
    fetch('flights.json')
      .then(encodedFlightData => encodedFlightData.json())
      .then(flightData => {
        // Store all legs in a map for faster retrieval
        const flightLegs = new Map();
        flightData.legs.forEach(leg => {
          flightLegs.set(leg.id, leg);
        });

        // Generate Itinerary components
        setRenderedItineraries(
          flightData.itineraries.map(itinerary => {
            return (
              <Itinerary
                key={`${itinerary.id}__itineraries`}
                itineraryID={itinerary.id}
                // Get the relevant flight legs for this itinerary from the Map
                legs={itinerary.legs.map(leg => flightLegs.get(leg))}
                price={itinerary.price}
                agent={itinerary.agent}
              />
            );
          }),
        );
      });
  }, []);

  return (
    <div className={getClassName('app')}>
      <Header />
      <div className={getClassName('app__itineraries')}>
        {renderedItineraries}
      </div>
    </div>
  );
}

export default App;
