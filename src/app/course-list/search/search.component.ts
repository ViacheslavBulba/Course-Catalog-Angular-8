import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { debounceTime } from 'rxjs/operators';
import { Observable, BehaviorSubject, throwError } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private currentSearchStringSubject: BehaviorSubject<string>;

  @Output() public searchRequest = new EventEmitter<string>();

  constructor() {
    this.currentSearchStringSubject = new BehaviorSubject<string>('');
    this.currentSearchStringSubject.asObservable().pipe(
      debounceTime(500)
    ).subscribe(x => this.searchRequest.emit(x));
  }

  ngOnInit() {
  }

  public onSearchType(value: string) {
    this.currentSearchStringSubject.next(value);
  }

}
