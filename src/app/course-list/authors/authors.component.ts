import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';
import { CustomValueEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthorsComponent implements OnInit {

  @Input() public authorSet: Set<User>;
  @Output() public authorsOutput = new EventEmitter<Set<User>>();

  // public authors: string[] = [];

  public value: string[] = [];

  constructor() { }

  ngOnInit() {
    this.getAuthorsFromInput();
  }

  // getAuthorsFromInput() {
  //   if (this.authorSet != null) {
  //     for (const author of this.authorSet.values()) {
  //       this.authors.push(`${author.firstName} ${author.lastName}`);
  //     }
  //     this.value = this.authors;
  //   }
  // }

  getAuthorsFromInput() {
    if (this.authorSet != null) {
      for (const author of this.authorSet.values()) {
        this.value.push(`${author.firstName} ${author.lastName}`);
      }
    }
  }

  emitOutput() {
    console.log('emit output from authors');
    const authorsToSend = new Set<User>();
    console.log('this.value length = ' + this.value.length);

    for (const fullName of this.value) {
      const names: string[] = fullName.split(' ');
      const author: User = {
        id: Number(new Date()),
        firstName: names[0],
        lastName: names[1]
      };
      authorsToSend.add(author);
    }
    // console.log(authorsToSend.values);

    for (const author of authorsToSend.values()) {

      console.log(`${author.id} ${author.firstName} ${author.lastName}`);
    }


    this.authorsOutput.emit(authorsToSend);
  }

  newDataAdded(customValue: string) {
    // console.log(customValue);
    // this.value.push(customValue.newData.valueOf().toString());
  }

}
