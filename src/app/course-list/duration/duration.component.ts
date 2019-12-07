import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DurationComponent implements OnInit {

  @Input() public durationInMinutes: number;
  @Output() public durationOutput = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  emitOutput() {
    this.durationOutput.emit(this.durationInMinutes);
  }

}
