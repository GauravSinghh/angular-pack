import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{

  allowNewServer=false;
  serverCreationStatus='No server was created! ';
  serverName='testsername';
  serverCreated=false;
  servers=['TestServer1' ];
  constructor(){
    setTimeout(() =>{
      this.allowNewServer=true;
    },3000);
  }

  ngOnInit(): void {
    
  }
  onCreateServer(){
   
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='Server is created! Name is '+ this.serverName;
  }
  onUpdateServerName(event: any){
   this.serverName=event.target.value;
   console.log(event.target.value);
  }
}
