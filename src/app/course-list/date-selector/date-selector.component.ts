import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent implements OnInit {

  @Input() public date: Date;
  @Output() public dateOutput = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
  }

  emitOutput() {
    this.dateOutput.emit(this.date);
  }

}
