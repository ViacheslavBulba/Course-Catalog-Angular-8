import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private currentSearchStringSubject = new BehaviorSubject<string>('');

  @Output() public searchRequest = new EventEmitter<string>();

  public ngOnInit() {
    this.currentSearchStringSubject
      .pipe(
        filter((v) => v.length > 2 || v.length === 0),
        debounceTime(500),
      ).subscribe((x) => this.searchRequest.emit(x));
  }

  public onSearchType(value: string) {
    this.currentSearchStringSubject.next(value);
  }

}
