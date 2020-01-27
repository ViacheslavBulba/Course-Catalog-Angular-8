import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent implements OnInit {

  dateGroup: FormGroup;

  @Input() public dateInput: Date;
  @Output() public dateOutput = new EventEmitter<Date>();

  constructor() { }

  ngOnInit() {
    this.dateGroup = new FormGroup({
      date: new FormControl(this.dateInput, [Validators.required])
    });
  }

  emitOutput() {
    this.dateOutput.emit(this.dateInput);
  }

  get date() {
    return this.dateGroup.get('date');
  }

}
