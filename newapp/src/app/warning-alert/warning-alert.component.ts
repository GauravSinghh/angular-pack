import { Component } from '@angular/core';

@Component({
    selector:'app-warning-alert',
    template:`
    <p>This is a Warning! Be careful</p>
    `,
    styles:[`
    p{
        padding:10px;
        background-color: coral;
        border: 1px solid red;
    }`]

})
export class WarningAlertComponent{

}