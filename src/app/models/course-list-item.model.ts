import { User } from './user.model';

export interface CourseListItem {
  id: number;
  title: string;
  description: string;
  creationDate: Date;
  durationInMinutes: number;
  authors: Set<User>;
  topRated: boolean;
}
