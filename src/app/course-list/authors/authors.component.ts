import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';
@Component(
  {
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    encapsulation: ViewEncapsulation.None
  })
export class AuthorsComponent implements OnInit {

  @Input() public incomingAuthors: Set<User>;
  @Output() public authorsOutput = new EventEmitter<Set<User>>();

  authors = [];
  selectedAuthors: string[] = [];

  constructor() { }

  ngOnInit() {
    this.getIncomingAuthors();
  }

  getIncomingAuthors() {
    if (this.incomingAuthors != null) {
      for (const author of this.incomingAuthors.values()) {
        this.authors.push({ id: author.id, value: `${author.firstName} ${author.lastName}` });
        this.selectedAuthors.push(`${author.firstName} ${author.lastName}`);
      }
    }
  }

  addCustomUser = (newCustomValue: any) => ({ id: newCustomValue, value: newCustomValue });

  emitOutput() {
    const authorsToSend = new Set<User>();
    for (const fullName of this.selectedAuthors) {
      const names: string[] = fullName.split(' ');
      let author: User;
      if (names.length !== 2) {
        author = {
          id: Number(new Date()),
          firstName: names[0],
          lastName: names[0]
        };
      } else {
        let isExistingAuthor = false;
        if (this.incomingAuthors != null) {
          for (const user of this.incomingAuthors.values()) {
            if ((user.firstName === names[0]) && (user.lastName === names[1])) {
              author = user;
              isExistingAuthor = true;
            }
          }
        }
        if (!isExistingAuthor) {
          author = {
            id: Number(new Date()),
            firstName: names[0],
            lastName: names[1]
          };
        }
      }
      authorsToSend.add(author);
    }
    this.authorsOutput.emit(authorsToSend);
  }

}
