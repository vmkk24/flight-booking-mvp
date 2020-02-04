import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TrackTicketComponent } from './track-ticket/track-ticket.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [TrackTicketComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModuleModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class TicketModule { }
