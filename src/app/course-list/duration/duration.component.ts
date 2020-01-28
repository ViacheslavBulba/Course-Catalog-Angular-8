import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {

  @Input() public durationInMinutes: number;
  @Output() public durationOutput = new EventEmitter<number>();
  @Input() parentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  emitOutput() {
    this.durationOutput.emit(this.durationInMinutes);
  }

  get duration() {
    return this.parentForm.get('duration');
  }

}
