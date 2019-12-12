import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent {

  @Input() public date: Date;
  @Output() public dateOutput = new EventEmitter<Date>();

  public emitOutput(event) {
    this.dateOutput.emit(event.value);
  }

}
