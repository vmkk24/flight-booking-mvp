import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { BookingComponent } from './booking.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModuleModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [BookingComponent],
      providers: [
        { provide: Service },
        { provide: FormBuilder, useValue: formBuilder },
        UrlConfig, MessageService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
