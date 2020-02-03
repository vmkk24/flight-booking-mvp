import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./module/dashboard/dashboard.module`).then(m => m.DashboardModule)
  },
  {
    path: '',
    loadChildren: () => import(`./module/booking/booking.module`).then(m => m.BookingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
