import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./module/dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path: 'booking',
    loadChildren: () => import(`./module/booking/booking.module`).then(m => m.BookingModule)
  },
  {
    path: 'ticket-track',
    loadChildren: () => import(`./module/ticket/ticket.module`).then(m => m.TicketModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
