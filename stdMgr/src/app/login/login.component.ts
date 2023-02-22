import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user.entity';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   user=new User();

   constructor(private appService:AppService,private router:Router){}

  loginSubmit(data){

    
    localStorage.setItem("username",data.username);
    localStorage.setItem("password",data.password);

    this.appService.getAuthorisedConfirmation().subscribe(data=>{
      console.log(data);
      this.router.navigate(['/dashboard']);
    },error=>{
      console.log(error)
      alert('Unauthorised');
    })
  }


  isLogin(){
    if(localStorage.getItem("username"),localStorage.getItem("password")){
      return true;
    }else{
      return false;
    }
  }
}
