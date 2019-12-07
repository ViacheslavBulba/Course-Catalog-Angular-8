import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../../models/author.model';
@Component(
  {
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    encapsulation: ViewEncapsulation.None
  })
export class AuthorsComponent implements OnInit {

  @Input() public incomingAuthors: Set<Author>;
  @Output() public authorsOutput = new EventEmitter<Set<Author>>();

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
    const authorsToSend = new Set<Author>();
    for (const fullName of this.selectedAuthors) {
      const names: string[] = fullName.split(' ');
      let author: Author;
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
