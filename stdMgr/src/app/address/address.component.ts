import { Component } from '@angular/core';
import { Address } from '../address.entity';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  editMode:boolean=false;
  
  constructor(private appService:AppService, private dashboard:DashboardComponent){}

  onSaveAddress(data:Address){
    console.log(data)
    this.appService.addAddress(data,this.appService.currentStudentId).subscribe(data=>{
      console.log(data);
      this.dashboard.onGettingResultByPagiantion();
    },error=>{
      console.warn(error);
      alert(error.error[0].defaultMessage)
    })
  }
}
