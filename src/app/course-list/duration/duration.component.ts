import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {

  durationGroup: FormGroup;

  @Input() public durationInMinutes: number;
  @Output() public durationOutput = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.durationGroup = new FormGroup({
      duration: new FormControl(this.durationInMinutes, [Validators.required])
    });
  }

  emitOutput() {
    this.durationOutput.emit(this.durationInMinutes);
  }

  get duration() {
    return this.durationGroup.get('duration');
  }

}
