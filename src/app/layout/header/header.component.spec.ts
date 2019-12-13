import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]), HttpClientTestingModule
      ],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.isLoggedIn = true;
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
