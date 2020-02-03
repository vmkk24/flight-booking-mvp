import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AlertComponent } from './alert/alert.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { Service } from '../service/service';

import { UrlConfig } from '../service/url-config';
import { CustomValidation } from '../helper/validation';

@NgModule({
  declarations: [AlertComponent, SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Service, UrlConfig, CustomValidation],
  exports: [ FormsModule,
    ReactiveFormsModule,
    AlertComponent,
    SpinnerComponent,
    ]
})
export class SharedModuleModule { }
