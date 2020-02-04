import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { BookingRoutingModule } from './booking-routing.module';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {DropdownModule} from 'primeng/dropdown';
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [BookingComponent],
    imports: [
      CommonModule,
      BookingRoutingModule,
      SharedModuleModule,
      DropdownModule,
      ToastModule
    ]
  })
  export class BookingModule { }
