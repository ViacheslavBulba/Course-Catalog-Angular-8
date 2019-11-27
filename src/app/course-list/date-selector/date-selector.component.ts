import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateSelectorComponent implements OnInit {

  @Input() public date: Date;

  constructor() { }

  ngOnInit() {
  }

}
