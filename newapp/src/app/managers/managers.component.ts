import { Component } from '@angular/core';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css']
})
export class ManagersComponent {
  age=0;

  constructor(){
    this.age=Math.floor(Math.random()* (60-18)+18);

  }

  getColor(){
    return this.age>30?'green': 'coral';
  }
}
