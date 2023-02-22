import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // template: `
  //   <h4>Server working!</h4>
  //   <app-manage></app-manage>
  // `,
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{

  username='';
  // usernameStatus=false;
  serverName='NO name';
  changedStatus=false;
  serverStatus =this.serverName;
  onAddingServerName(event: any){
    this.serverName=event.target.value;
  }
  onUpdatingServerName(){
    this.serverStatus='Server name changed to ' + this.serverName;
    this.changedStatus=false;
  }
  onClearName(){
    this.username='';  //no use since we are doing it with the event
  }
  constructor(){
    setInterval(() =>{
      this.changedStatus=true;

    },8000);
  }
  ngOnInit(): void {
    
  }

}
