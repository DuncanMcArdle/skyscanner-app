import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import FlightLeg from '.';

describe('FlightLeg', () => {
  it('should render a flight leg', () => {
    const component = render(
      <FlightLeg
        departureAirport="TestDepartureAirport"
        departureTime="TestDepartureTime"
        arrivalAirport="TestArrivalAirport"
        arrivalTime="TestArrivalTime"
        numberOfStops={1}
        airlineID="TestAirlineID"
        airlineName="TestAirlineName"
        duration={1}
      />,
    );

    expect(component.getByTestId('flight-leg')).toBeInTheDocument();
  });
});
