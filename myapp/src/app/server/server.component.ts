import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color:white;
    }`]
})
export class ServerComponent{
    serverStatus: string='up and running!';
    serverId:number=Math.random();
    constructor(){
        this.serverStatus=this.serverId>0.5?  'online': 'offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getServerId(){
        return this.serverId;
    }
    getColor(){
        // return this.serverId>0.5? 'green':'red';  // based on server id
        return this.serverStatus==='online'?'green':'red';  // based on color
    }
}