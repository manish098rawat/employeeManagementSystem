import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompInfoComponent } from './comp-info/comp-info.component';
import { LeaveMsComponent } from './leave-ms/leave-ms.component';
import { PayRollComponent } from './pay-roll/pay-roll.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CompInfoComponent,
    LeaveMsComponent,
    PayRollComponent,
    EmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
