import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
