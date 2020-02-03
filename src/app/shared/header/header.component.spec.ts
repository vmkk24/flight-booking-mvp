import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  const MockUserService = {
    isValidUser: false,
    currentUser: {
      userName: 'Mani',
      userId: 1234,
      role: 'ADMIN'
    },
    getMessage: () => {
      return of({
        userName: 'Mani',
        userId: 1234,
        role: 'ADMIN'
      });
    },
    clearMessages: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockRouter }]
    })
    .compileComponents();
    mockRouter = TestBed.get(ActivatedRoute);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate toggle ', () => {
    component.toggleFlag = true;
    component.toggle();
    expect(component.toggleFlag).toBe(false);
  });

});
