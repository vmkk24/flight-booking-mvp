import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { TrackTicketComponent } from './track-ticket.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrackTicketComponent', () => {
  let component: TrackTicketComponent;
  let fixture: ComponentFixture<TrackTicketComponent>;
  let api: Service;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTicketComponent ],
      imports: [SharedModuleModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    api = TestBed.get(Service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
