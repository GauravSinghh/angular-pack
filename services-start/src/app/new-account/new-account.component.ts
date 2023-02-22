import { Component, } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService,
              private accountService:AccountService){
      
                this.accountService.updatedStatus.subscribe(
        (status:string)=>alert('New Status is : '+status)
      );
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
  //  let service = new LoggingService();
  //  service.logStatusChange(accountStatus);
    this.accountService.addAccount(accountName,accountStatus);
  this.loggingService.logStatusChange(accountStatus);
  
  }
}
