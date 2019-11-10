import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<app-search (searchRequest)="onSearch($event)"></app-search>`
})
class TestHostComponent {
  stringToSearch: string;
  onSearch(str: string) { this.stringToSearch = str; }
}

describe('SearchComponent via test host', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestHostComponent, SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should raise output onSearch event when search button is clicked', () => {
    const input = fixture.debugElement.query(By.css('.search-input'));
    input.nativeElement.value = 'someValue';
    input.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.search-button'));
    button.triggerEventHandler('click', null);
    expect(component.stringToSearch).toBe('someValue');
  });

});
