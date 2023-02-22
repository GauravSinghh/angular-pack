import { Component, ErrorHandler } from '@angular/core';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  editModeCourse=false;

constructor(private appService:AppService,private dashboard:DashboardComponent){}

  onSaveCourse(data){
    //console.log(data);
    this.appService.addCourse(data,this.appService.currentStudentId).subscribe(data=>{
      console.log(data); 
       this.dashboard.onGettingResultByPagiantion();
    },error=>{
      console.warn(error);

      alert(error.error[0].defaultMessage);
    })
  }
}
