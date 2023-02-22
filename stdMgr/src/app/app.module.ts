import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
import { AddressComponent } from './address/address.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyInterceptorInterceptor } from './my-interceptor.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AddressComponent,
    AadharComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppService,AppComponent,LoginComponent,DashboardComponent,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MyInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
