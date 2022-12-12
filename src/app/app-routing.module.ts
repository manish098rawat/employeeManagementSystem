import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompInfoComponent } from './comp-info/comp-info.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LeaveMsComponent } from './leave-ms/leave-ms.component';
import { PayRollComponent } from './pay-roll/pay-roll.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'compinfo', component:CompInfoComponent  },
  { path: 'employee', component:EmployeeComponent },
  { path: 'payroll', component:PayRollComponent  },
  { path: 'lms', component:LeaveMsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
