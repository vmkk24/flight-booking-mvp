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

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let api: Service;

  // create new instance of FormBuilder
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [SharedModuleModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Service },
        { provide: FormBuilder, useValue: formBuilder },
        UrlConfig],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    mockRouter = TestBed.get(Router);
    api = TestBed.get(Service);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
