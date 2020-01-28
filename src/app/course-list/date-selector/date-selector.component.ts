import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent implements OnInit {

  @Input() public dateInput: Date;
  @Output() public dateOutput = new EventEmitter<Date>();
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  emitOutput() {
    this.dateOutput.emit(this.dateInput);
  }

  get date() {
    return this.parentForm.get('date');
  }

}
