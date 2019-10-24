import { MinutesToHoursWithMinutesPipe } from './minutes-to-hours-with-minutes.pipe';

describe('MinutesToHoursWithMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesToHoursWithMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
