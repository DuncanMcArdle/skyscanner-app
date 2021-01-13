import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Itinerary from './Itinerary';

jest.mock('../FlightLeg/', () => () => <div data-testid="flight-leg" />);
jest.mock('../ItinerarySummary/', () => () => (
  <div data-testid="itinerary-summary" />
));

describe('Itinerary', () => {
  const testLegs = [
    {
      id: 'leg_1',
    },
    {
      id: 'leg_2',
    },
  ];

  it('should contain the correct number of flight legs', () => {
    const component = render(
      <Itinerary
        itineraryID="ID123"
        legs={testLegs}
        price="£100"
        agent="Skyscanner"
      />,
    );

    expect(component.getAllByTestId('flight-leg')).toHaveLength(
      testLegs.length,
    );
  });

  it('should contain a flight summary', () => {
    const component = render(
      <Itinerary
        itineraryID="ID123"
        legs={testLegs}
        price="£100"
        agent="Skyscanner"
      />,
    );

    expect(component.getByTestId('itinerary-summary')).toBeInTheDocument();
  });
});
