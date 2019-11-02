import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user login info text should be User login', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.user-info .padding-left-10').textContent).toBe('User login');
  });

  it('logout link text should be Log off', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.logout .padding-left-10').textContent).toBe('Log off');
  });

});
