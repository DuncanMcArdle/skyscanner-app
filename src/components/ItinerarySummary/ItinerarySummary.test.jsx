import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import ItinerarySummary from './ItinerarySummary';

describe('ItinerarySummary', () => {
  it('should show the itinerary price', () => {
    const testPrice = '£123';
    const testAgent = 'Skyscanner';
    const component = render(
      <ItinerarySummary price={testPrice} agent={testAgent} />,
    );

    expect(component.getByText(testPrice)).toBeInTheDocument();
  });

  it('should show the itinerary agent', () => {
    const testPrice = '£123';
    const testAgent = 'Skyscanner';
    const component = render(
      <ItinerarySummary price={testPrice} agent={testAgent} />,
    );

    expect(component.getByText(testAgent)).toBeInTheDocument();
  });
});
