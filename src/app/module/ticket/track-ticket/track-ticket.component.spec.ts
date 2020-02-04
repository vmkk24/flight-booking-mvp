import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { TrackTicketComponent } from './track-ticket.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

describe('TrackTicketComponent', () => {
  let component: TrackTicketComponent;
  let fixture: ComponentFixture<TrackTicketComponent>;
  let api: Service;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
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

    getList() {
      return of({
        ticketId: 1,
        bookingDate: '23-4-20',
        emailId: 'test',
        phoneNumber: 565656565,
        paymentType: 'g-pay',
        totalFare: 50000,
        status: 'confimed',
        source: 'delhi',
        destination: 'Chennai',
        passagerList: [
            {
                name: 'Test',
                age: 23,
                aadharNumber: 34534534534
            },
            {
                name: 'tes1',
                age: 37,
                aadharNumber: 5446456
            }
        ]
      });
    }
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTicketComponent ],
      imports: [SharedModuleModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Service, useValue: MockUserService },
        { provide: Router, useValue: mockRouter },
        UrlConfig, MessageService, ConfirmationService],
    })
    .compileComponents();
    api = TestBed.get(Service);
    mockRouter = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should validate track ticket', () => {
    component.ticketId = 5001;
    component.getTicketDetail();
    component.ticketErrorFlag  = false;
    expect(component.ticketId).toEqual(5001);
    component.spinner = true;
  });
});
