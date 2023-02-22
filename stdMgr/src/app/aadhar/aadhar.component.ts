import { Component } from '@angular/core';
import { Aadhar } from '../aadhar.entity';
import { AppService } from '../app.service';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.css']
})
export class AadharComponent {

constructor(private appService:AppService){}

  onSavingAadhar(aadharLog:any){
    let aadhar= new Aadhar(aadharLog);
    this.appService.addAadhar(aadhar,this.appService.currentStudentId).subscribe(data=>{console.log(data)},
    error=>{
      console.warn(error);
      alert(error.error.message);
    });
  }

}
