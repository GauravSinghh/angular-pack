import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ManageComponent } from './manage/manage.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { ManagersComponent } from './managers/managers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ManageComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ManagersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
