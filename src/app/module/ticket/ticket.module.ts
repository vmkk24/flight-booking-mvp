import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TrackTicketComponent } from './track-ticket/track-ticket.component';
import { SharedModuleModule } from 'src/app/shared/shared-module.module';


@NgModule({
  declarations: [TrackTicketComponent],
  imports: [
    CommonModule,
    TicketRoutingModule,
    SharedModuleModule
  ]
})
export class TicketModule { }
