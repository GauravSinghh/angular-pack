import { Component } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  name='';
  finalName='';
  managers=['arun'];
  onAddingName(){
    this.finalName=this.name;
    this.managers.push(this.finalName);
    
  }

 




}
