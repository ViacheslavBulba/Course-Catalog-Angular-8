import { MinutesToHoursWithMinutesPipe } from './minutes-to-hours-with-minutes.pipe';

describe('MinutesToHoursWithMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesToHoursWithMinutesPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms 90 to 1 h 30 min', () => {
    const pipe = new MinutesToHoursWithMinutesPipe();
    expect(pipe.transform(90)).toBe('1 h 30 min');
  });

  it('transforms 58 to 58 min', () => {
    const pipe = new MinutesToHoursWithMinutesPipe();
    expect(pipe.transform(58)).toBe('58 min');
  });
});
