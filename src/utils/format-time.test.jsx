import formatTime from './format-time';

describe('Util: format-time', () => {
  it('Should correctly render a 24-hour time that does not require leading 0s', () => {
    const timestamp = '2021-01-01T12:34';
    const formattedTime = formatTime(timestamp);

    expect(formattedTime).toBe('12:34');
  });

  it('Should correctly render a 24-hour time that does require leading 0s', () => {
    const timestamp = '2021-01-01T01:02';
    const formattedTime = formatTime(timestamp);

    expect(formattedTime).toBe('01:02');
  });
});
