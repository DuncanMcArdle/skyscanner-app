import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import FlightStops from './FlightStops';

describe('FlightStops', () => {
  it('should correctly render a direct itinerary', () => {
    const numberOfStops = 0;
    const component = render(<FlightStops numberOfStops={numberOfStops} />);
    const targetElement = component.getByText('Direct');

    expect(targetElement).toBeInTheDocument();
    expect(targetElement).toHaveClass('flight-stops__direct');

    expect(component.queryByText('Stop')).not.toBeInTheDocument();
    expect(component.queryByText('Stops')).not.toBeInTheDocument();
  });

  it('should correctly render a single stop itinerary', () => {
    const numberOfStops = 1;
    const component = render(<FlightStops numberOfStops={numberOfStops} />);
    const targetElement = component.getByText('1 Stop');

    expect(targetElement).toBeInTheDocument();
    expect(targetElement).toHaveClass('flight-stops__indirect');

    expect(component.queryByText('Direct')).not.toBeInTheDocument();
    expect(component.queryByText('Stops')).not.toBeInTheDocument();
  });

  it('should correctly render a multi-stop itinerary', () => {
    const numberOfStops = 2;
    const component = render(<FlightStops numberOfStops={numberOfStops} />);
    const targetElement = component.getByText('2 Stops');

    expect(targetElement).toBeInTheDocument();
    expect(targetElement).toHaveClass('flight-stops__indirect');

    expect(component.queryByText('Direct')).not.toBeInTheDocument();
    expect(component.queryByText('Stop')).not.toBeInTheDocument();
  });
});
