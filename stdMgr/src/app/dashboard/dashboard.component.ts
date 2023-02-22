import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Aadhar } from '../aadhar.entity';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';
import { Student } from '../student.entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  
  studentData:any=null;
  courseListData:Object=this.appService.courseOriginData;
  courseDataToggle=false;
  @ViewChild('studentForm') form:NgForm;
  editMode:boolean=false;
  addressToggle=false;
  aadharToggle=false; 
  courseToggle=false;
  sortField:string="studentId";
  totalItems:number=5;
  lastPage:number=1;
  currentPage:number=1;
  noOfItemsOnthisPage:number=3;
  sortType="asc";
  updatingStudent;
  viewStudentList:boolean=false;


  constructor(private appService:AppService, private appComponent:AppComponent,private router:Router){ }

  ngOnInit(): void {
    // console.log("ng on it dashboard" + this.studentData)
    // this.studentData= this.appService.StudentOriginData;
    // console.log("ng on it dashboard" + this.studentData)
    // this.appComponent.onGettingResultByPagiantion(); 

  //  this.onGettingStudentList();
    this.onGettingResultByPagiantion()
    // this.courseListData=this.appService.courseOriginData;
    // this.courseListData=this.
    console.log(this.courseListData);
  }


//add or update student
onSaveStudent(data){
  // event.preventDefault();
  // console.log(data);
   let sName=data.form.value.studentName;  
   let sContact= data.form.value.contactNo;
   let studentId= data.form.value.studentId;
   let aadharLoggedNo=data.form.value.aadharNo;
   let aadhar =new Aadhar(aadharLoggedNo);
    console.log("aadhar value"+aadharLoggedNo)
    if(aadharLoggedNo==""){
     alert("Aadhar can't be null!");        
    }
    
    if(aadharLoggedNo==" "){
     alert("Aadhar can't be Blank!");        
    }
   let newStudent=new Student(sName,studentId,sContact,aadhar);
   console.log(newStudent);
   //Add 
   if(!this.editMode){
     this.appService.addStudentData(newStudent).subscribe(data=>{
       console.log(data);  
       this.onGettingResultByPagiantion();  
       this.viewStudentList=true;
     },error=>{
      console.log(error)
       alert(error.error[0].defaultMessage);          
     })    
   }  //Update
 else{
   this.appService.updateStudent(newStudent).subscribe(data=>{
     // console.log("on Updating");
     // console.log(this.editMode)
     // console.log(data);
     this.onGettingResultByPagiantion();  
   },error=>{
    console.log(error)
     console.warn(error.error[0].defaultMessage);
     alert(error.error[0].defaultMessage);
   })
 }   
}


  //getting student data list
  onGettingStudentList(){
 
    this.appService.getStudentData().subscribe((data)=>{
      console.log(data);
      console.log("Inside getting method")
        this.studentData=data;
        this.appService.StudentOriginData=data;
        if(this.studentData==null){
          this.viewStudentList=false;
        }else{
          this.viewStudentList=true;
        }
      // console.log(this.studentData);
    })
  }


  //for deleting user
  onDeleting(id:number){
    this.appService.deleteStudent(id).subscribe(data=>{
      console.table(data);
      this.appService.getStudentData().subscribe((data)=>{
        console.log(data);
        console.log("Inside getting method")
        this.onGettingResultByPagiantion(); 
          this.studentData=data;
          this.appService.StudentOriginData=data;
       console.log(this.studentData);
      })
      alert("Student deleted successfully !")      
    });
  }

  //Getting course list data
  onGettingCourseList(){
    this.appService.getCourseList().subscribe(data=>{
      console.log("course Data :"+data);
      this.courseListData=data;
      if(!this.courseListData){
        alert("No Course Details Added!")
      }else{
        this.appService.courseOriginData=data;
        this.courseDataToggle=!this.courseDataToggle;
      }
     
    },error=>{
      alert(error.error.message)
      if(error.error.message=='Unauthorized'){
        this.router.navigate(['login']);
      }
    })
  }

    //update form
    onUpdating(id:number){
      let currentStudent=this.studentData[id];
      this.updatingStudent=currentStudent;
      console.log(currentStudent);
      this.form.setValue({
       studentName:currentStudent.studentName,
       studentId:currentStudent.studentId,
       contactNo:currentStudent.contactNo,
       aadharNo:currentStudent.aadhar.aadharNo
     })
     this.editMode=!this.editMode; 
     }

  //On add address button
  onAddingAddress(id:number){
    this.addressToggle=!this.addressToggle;
    this.appService.currentStudentId=id;
  }

  //On add course Button
  onAddingCourse(id:number){
    this.appService.currentStudentId=id;
    this.courseToggle=!this.courseToggle;    
  }

  //for deleting course
  onDeletingCourse(courseId:number){
    this.appService.deleteCourse(courseId).subscribe();
  }

  //PAGINATION
  onGettingResultByPagiantion(){
    let info={  pageSize:1,limit:5,sortType:"",sortField:"",searchItem:""};
   
    this.appService.searchingName(info).subscribe((data:any)=>{
      console.log(data.mylist);
       this.studentData=data.mylist;
       this.appService.StudentOriginData=data.mylist;

       this.lastPage=data.lastPage;
      this.currentPage=data.pageSize;
      this.noOfItemsOnthisPage=data.limit;
      this.appService.getStudentData().subscribe();
      this.totalItems=data.count;    
      if(this.studentData==null){
        this.viewStudentList=false;
      }else{
        this.viewStudentList=true;
      }      
    },error=>{
      console.log(error);
      //alert(error.error.message);
      if(error.status=401){
        alert("Unauthorised!")
        this.router.navigate(['login']);
      }
    })  
  }
    
  //-SEARCHING
  onSearchItem(inputItem: any){
    //console.log(inputItem);
    let info={searchItem:inputItem}
    this.appService.searchingName(info).subscribe((data:any)=>{
      console.log(data.mylist);
       this.studentData=data.mylist;
       this.appService.StudentOriginData=data.mylist;
       this.lastPage=data.lastPage;
      this.currentPage=data.pageSize;
      this.noOfItemsOnthisPage=data.limit;
      this.appService.getStudentData().subscribe();
      this.totalItems=data.count;
    })
  }
  
  //sortBy
  onSortBy(event:any){
    // console.log("jo");
    // console.log(event.target.value)
    this.sortField=event.target.value;
    let info={sortField:this.sortField,sortType:""}
    
    this.appService.searchingName(info).subscribe((data:any)=>{
      console.log(data);
      this.totalItems=data.count;
      this.studentData=data.mylist;
      this.appService.StudentOriginData=data.mylist;
      this.lastPage=data.lastPage;
      this.currentPage=data.pageSize;
      this.noOfItemsOnthisPage=data.limit;
      
      this.appService.getStudentData().subscribe();
    }
    );
  }

  onSortType(event:any){
    let info ={sortField:this.sortField,sortType:event.target.value};
    this.appService.searchingName(info).subscribe((data:any)=>{
      console.log(data);
      this.totalItems=data.count;
      this.studentData=data.mylist;
      this.appService.StudentOriginData=data.mylist;

      this.lastPage=data.lastPage;
      this.currentPage=data.pageSize;
      this.noOfItemsOnthisPage=data.limit;
      this.sortType=event.target.value;
      this.appService.getStudentData().subscribe();
    })

  }
  

  //Page no up and down
  onDecreasingPageNo(){
    if(this.currentPage>1){
      this.currentPage=this.currentPage-1;
      this.appService.searchingName({pageSize:this.currentPage}).subscribe((data:any)=>{
        this.totalItems=data.count;
        this.studentData=data.mylist;
        this.appService.StudentOriginData=data.mylist;

        this.lastPage=data.lastPage;
        this.currentPage=data.pageSize;
        this.noOfItemsOnthisPage=data.limit;
  
        this.appService.getStudentData().subscribe();
      })
    }
  }
  onIncreasingPageNo(){
    if(this.currentPage<this.lastPage){
      this.currentPage=this.currentPage+1;
      this.appService.searchingName({pageSize:this.currentPage}).subscribe((data:any)=>{
        this.totalItems=data.count;
        this.studentData=data.mylist;
        this.appService.StudentOriginData=data.mylist;

        this.lastPage=data.lastPage;
        this.currentPage=data.pageSize;
        this.noOfItemsOnthisPage=data.limit;
  
        this.appService.getStudentData().subscribe();
      })
    }
  }

  //max items on one page
  onLimitChange(event:any){
    console.log(event.target.value)
    let info={sortField:this.sortField,sortType:this.sortType,limit:event.target.value}
    this.appService.searchingName(info).subscribe((data:any)=>{
      this.totalItems=data.count;
      this.studentData=data.mylist;
      this.appService.StudentOriginData=data.mylist;

      this.lastPage=data.lastPage;
      this.currentPage=data.pageSize;
      this.noOfItemsOnthisPage=data.limit;

      this.appService.getStudentData().subscribe();
    })

  }

  //loggingout
  onLoggingOut(){
    localStorage.setItem("username",null);
    localStorage.setItem("password",null);
    this.router.navigate(['login']);
  }







}
