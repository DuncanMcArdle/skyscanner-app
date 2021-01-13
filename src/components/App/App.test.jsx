import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, act } from '@testing-library/react';
import ReactDOM from 'react-dom';

import testFlights from './testFlights.json';
import App from './App';

jest.mock('../Itinerary/', () => () => <div data-testid="itinerary" />);

beforeEach(() => {
  // Mock fetching of flight data so that static test data can be used
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(testFlights),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  it('renders the correct number of itineraries', async () => {
    let component;

    // Wait for all itineraries to be rendered
    await act(async () => {
      component = render(<App />);
    });

    expect(component.getAllByTestId('itinerary')).toHaveLength(7);
  });
});
