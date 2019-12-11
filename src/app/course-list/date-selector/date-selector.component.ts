import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent implements OnChanges {

  public date$ = new BehaviorSubject<Date>(null);

  public date: Date = null;

  @Input() public dateInput: Date;
  @Output() public dateOutput = new EventEmitter<Date>();

  constructor() { }

  ngOnChanges() {
    this.date = this.dateInput;
    this.date$.next(this.date);
  }

  saveDate(date: Date) {
    console.log(date);
    this.date = date;
  }

  public emitOutput(event) {
    this.dateOutput.emit(this.date);
  }

}
