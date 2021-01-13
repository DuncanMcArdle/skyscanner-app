import formatDuration from './format-duration';

describe('Util: format-duration', () => {
  it('Should correctly render a duration that does not require a leading 0 on the minutes', () => {
    const duration = 150;
    const formattedDuration = formatDuration(duration);

    expect(formattedDuration).toBe('2h 30');
  });

  it('Should correctly render a duration that does require a leading 0 on the minutes', () => {
    const duration = 120;
    const formattedDuration = formatDuration(duration);

    expect(formattedDuration).toBe('2h 00');
  });
});
