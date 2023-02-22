import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumber: number[]=[];
  evenNumber: number[]=[];

  receivedNumber(gettingNumber:number){
    if(gettingNumber%2==0){
      this.evenNumber.push(gettingNumber);
    }else{
      this.oddNumber.push(gettingNumber);
    }
  }

  

}
