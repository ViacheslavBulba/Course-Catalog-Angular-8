import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHoursWithMinutes'
})
export class MinutesToHoursWithMinutesPipe implements PipeTransform {

  transform(value: number): string {
    const initialValueInMinutes: number = value;
    const hours: number = (initialValueInMinutes / 60);
    const roundHours: number = Math.floor(hours);
    const minutes: number = (hours - roundHours) * 60;
    const roundMinutes: number = Math.round(minutes);
    return roundHours + ' h ' + roundMinutes + ' min';
  }

}
