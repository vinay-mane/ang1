import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { Addignment2Component } from './addignment2/addignment2.component';
import { DirectivesComponent } from './directives/directives.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { EvenComponent } from './assignment4/even/even.component';
import { OddComponent } from './assignment4/odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Assignment1Component,
    WarningAlertComponent,
    SuccessalertComponent,
    Addignment2Component,
    DirectivesComponent,
    Assignment3Component,
    Assignment4Component,
    EvenComponent,
    OddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
