import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search button text should be Search', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.search-button').textContent).toBe('Search');
  });

  it('search input placeholder text should be Text to search', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input').placeholder).toBe('Text to search');
  });

});
