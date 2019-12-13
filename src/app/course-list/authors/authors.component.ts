import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Author } from '../../models/author.model';

@Component(
  {
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
  })
export class AuthorsComponent implements OnChanges {

  @Input() public incomingAuthors: Author[];
  @Output() public authorsOutput = new EventEmitter<Author[]>();

  public authors$ = new BehaviorSubject<Author[]>(null);
  public selectedAuthors: string[] = [];

  public ngOnChanges() {
    this.getIncomingAuthors();
  }

  private getIncomingAuthors() {
    if (this.incomingAuthors === null) {
      return;
    }

    const authors = [];
    for (const author of this.incomingAuthors.values()) {
      authors.push({ id: author.id, value: `${author.firstName} ${author.lastName}` });
      this.selectedAuthors.push(`${author.firstName} ${author.lastName}`);
    }

    this.authors$.next(authors);
  }

  public addCustomUser = (newCustomValue: any) => ({ id: newCustomValue, value: newCustomValue });

  public emitOutput() {
    const authorsToSend: Author[] = [];
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
      authorsToSend.push(author);
    }
    this.authorsOutput.emit(authorsToSend);
  }

}
