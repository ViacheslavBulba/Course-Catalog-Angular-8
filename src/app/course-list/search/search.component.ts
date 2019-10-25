import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchString = '';

  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    if (this.searchString === '') {
      console.log('Search input is empty');
      return;
    }
    console.log('Search button was clicked: ' + this.searchString);
  }

}
