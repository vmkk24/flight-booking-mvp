import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackTicketComponent } from './track-ticket/track-ticket.component';


const routes: Routes = [
  {
    path: '',
    component: TrackTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
