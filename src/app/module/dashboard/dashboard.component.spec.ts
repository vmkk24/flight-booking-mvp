import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { CustomValidation } from 'src/app/helper/validation';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let api: Service;
  let validationApi: CustomValidation;

  /* create mock data for testing */
  const MockUserService = {
    modalConfig: () => ({
      header: '',
      message: '',
      modalShow: '',
      button: ''
    }),
    alertConfigDefaultValue: () => ({
      header: '',
      message: '',
      modalShow: '',
      button: ''
    }),
    postCall(url: string, data: any, type: string) {
      return of({
        postObject
      });
    },
    getList() {
      return of([{
        flightId: 1,
        flightName: 'Air Asia',
        flightScheduleId: 2,
        scheduleDate: '27-4-20',
        availableSeats: 40,
        source: 'delhi',
        destination: 'Mumbai',
        fare: 2500
      }]);
    }
  };

  const postObject = {
    source: 'chennai',
    destination: 'bangalore',
    date: '2-02-20',
    noOfPassengers: 3,
    travelType: 'economy'
  };

  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [SharedModuleModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Service, useValue: MockUserService },
        { provide: FormBuilder, useValue: formBuilder },
        UrlConfig],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    mockRouter = TestBed.get(Router);
    api = TestBed.get(Service);
    validationApi = TestBed.get(CustomValidation);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check ngOnInit Valid User and form creation', () => {
    component.ngOnInit();
    component.searchForm = formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', Validators.required],
      noOfPassengers: ['', Validators.required],
      travelType: ['', Validators.required]
    });
    expect(component.searchForm.valid).toBeFalsy();
  });

  it('Should check date validation', () => {
    component.dobErrorFlag = false;
    const value = {
      target: {
        value: new Date()
      }
    };
    component.validateDOB(value);
    validationApi.checkFutureDate(new Date(), value.target.value);
    expect(component.dobErrorFlag).toEqual(false);
  });
});

