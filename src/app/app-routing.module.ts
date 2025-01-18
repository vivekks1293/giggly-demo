import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicButtonComponent } from './features/button/basic-button/basic-button.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'basicbutton', component: BasicButtonComponent } // Directly include the route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
