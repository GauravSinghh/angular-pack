import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor(private loginPage:LoginComponent) {}

  createBasicAuthToken(){
    let username=localStorage.getItem("username");
    let password = localStorage.getItem("password");
  //  console.log(username,password);

    return 'Basic '+ window.btoa(username+":"+password);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let reqUrl:String = request.url;
    if(!request.headers.has('authorization')){
      request= request.clone({ headers: request.headers.set('authorization',this.createBasicAuthToken())});
    }
   // console.log(request ," Requested")
    return next.handle(request);
  }
}
