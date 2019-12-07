import { Author } from './author.model';

export interface CourseListItem {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  durationInMinutes: number;
  authors: Set<Author>;
  topRated: boolean;
}
