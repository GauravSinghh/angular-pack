import { Component,  OnInit,ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { Student } from './student.entity';
import { NgForm } from '@angular/forms';
import { Aadhar } from './aadhar.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {

  studentData:Object;
  courseListData:Object;
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



  constructor(private appService:AppService){ }

// //add or update student
//   onSaveStudent(data){
//      // event.preventDefault();
//      // console.log(data);
//       let sName=data.form.value.studentName;  
//       let sContact= data.form.value.contactNo;
//       let studentId= data.form.value.studentId;
//       let aadharLoggedNo=data.form.value.aadharNo;
//        let aadhar =new Aadhar(aadharLoggedNo);
//        console.log("aadhar value"+aadharLoggedNo)
//        if(aadharLoggedNo==""){
//         alert("Aadhar can't be null!");        
//        }
       
//        if(aadharLoggedNo==" "){
//         alert("Aadhar can't be Blank!");        
//        }
//       let newStudent=new Student(sName,studentId,sContact,aadhar);
//       console.log(newStudent);
//       if(!this.editMode){
//         this.appService.addStudentData(newStudent).subscribe(data=>{
//           console.log(data);  
//           this.onGettingResultByPagiantion();  
//         },error=>{
//           alert(error.error[0].defaultMessage);          
//         })    
//       }  
//     else{
//       this.appService.updateStudent(newStudent).subscribe(data=>{
//         // console.log("on Updating");
//         // console.log(this.editMode)
//         // console.log(data);
//         this.onGettingResultByPagiantion();  
//       },error=>{
//         console.warn(error.error[0].defaultMessage);
//         alert(error.error[0].defaultMessage);
//       })
//     }   
//   }
  ngOnInit(): void {
  
  //  this.onGettingResultByPagiantion();
    
  }

  //Login Page
  // onLoginPage(){
  //   console.log("ngonit")
  //   this.appService.LoginPage().subscribe((data=>{
  //     console.log(data);
  //   }));
  //   console.log("ngonit")
  // }


  // onGettingStudentList(){
  //   this.appService.getStudentData().subscribe((data)=>{
  //     console.log(data);
  //     console.log("Inside getting method")
  //       this.studentData=data;
  //     // console.log(this.studentData);
  //   })
  // }

  // //update form
  // onUpdating(id:number){
  //  let currentStudent=this.studentData[id];
  //  console.log(currentStudent);
  //  this.form.setValue({
  //   studentName:currentStudent.studentName,
  //   studentId:currentStudent.studentId,
  //   contactNo:currentStudent.contactNo,
  //   aadharNo:currentStudent.aadhar.aadharNo
  // })
  // this.editMode=!this.editMode; 
  // }

  // onDeleting(id:number){
  //   // this.appService.deleteStudent(id).subscribe(data=>{
  //   //   //console.log(data);
  //   // }) 
  //   this.appService.deleteStudent(id).subscribe(data=>{
  //     console.table(data);
  //     this.appService.getStudentData().subscribe((data)=>{
  //       console.log(data);
  //       console.log("Inside getting method")
  //       this.onGettingResultByPagiantion(); 
  //         this.studentData=data;
  //      console.log(this.studentData);
  //     })
  //     alert("Student deleted successfully !")      
  //   });
  // }

  // onAddingAddress(id:number){
  //   this.addressToggle=!this.addressToggle;
  //   this.appService.currentStudentId=id;
  // }

  // onAddingAadhar(id:number){
  //   this.appService.currentStudentId=id;
  //   this.aadharToggle=!this.aadharToggle;
  // }

  // onAddingCourse(id:number){
  //   this.appService.currentStudentId=id;
  //   this.courseToggle=!this.courseToggle;    
  // }

  // onGettingCourseList(){
  //   this.appService.getCourseList().subscribe(data=>{
  //     console.log("course Data :"+data);
  //     this.courseListData=data;
  //     if(!this.courseListData){
  //       alert("No Course Details Added!")
  //     }
  //     this.appService.courseOriginData=data;
  //   })
  // }

  // onDeletingCourse(courseId:number){
  //   this.appService.deleteCourse(courseId).subscribe();
  // }


  // //PAGINATION
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
    })  
  }
  
  
  // //-SEARCHING
  // onSearchItem(inputItem: any){
  //   //console.log(inputItem);
  //   let info={searchItem:inputItem}
  //   this.appService.searchingName(info).subscribe((data:any)=>{
  //     console.log(data.mylist);
  //      this.studentData=data.mylist;
  //      this.lastPage=data.lastPage;
  //     this.currentPage=data.pageSize;
  //     this.noOfItemsOnthisPage=data.limit;
  //     this.appService.getStudentData().subscribe();
  //     this.totalItems=data.count;
  //   })
  // }
  
  // //sortBy
  // onSortBy(event:any){
  //   // console.log("jo");
  //   // console.log(event.target.value)
  //   this.sortField=event.target.value;
  //   let info={sortField:this.sortField,sortType:""}
    
  //   this.appService.searchingName(info).subscribe((data:any)=>{
  //     console.log(data);
  //     this.totalItems=data.count;
  //     this.studentData=data.mylist;
  //     this.lastPage=data.lastPage;
  //     this.currentPage=data.pageSize;
  //     this.noOfItemsOnthisPage=data.limit;
      
  //     this.appService.getStudentData().subscribe();
  //   }
  //   );
  // }

  // onSortType(event:any){
  //   let info ={sortField:this.sortField,sortType:event.target.value};
  //   this.appService.searchingName(info).subscribe((data:any)=>{
  //     console.log(data);
  //     this.totalItems=data.count;
  //     this.studentData=data.mylist;
  //     this.lastPage=data.lastPage;
  //     this.currentPage=data.pageSize;
  //     this.noOfItemsOnthisPage=data.limit;
  //     this.sortType=event.target.value;
  //     this.appService.getStudentData().subscribe();
  //   })

  // }
  

  // //Page no up and down
  // onDecreasingPageNo(){
  //   if(this.currentPage>1){
  //     this.currentPage=this.currentPage-1;
  //     this.appService.searchingName({pageSize:this.currentPage}).subscribe((data:any)=>{
  //       this.totalItems=data.count;
  //       this.studentData=data.mylist;
  //       this.lastPage=data.lastPage;
  //       this.currentPage=data.pageSize;
  //       this.noOfItemsOnthisPage=data.limit;
  
  //       this.appService.getStudentData().subscribe();
  //     })
  //   }
  // }
  // onIncreasingPageNo(){
  //   if(this.currentPage<this.lastPage){
  //     this.currentPage=this.currentPage+1;
  //     this.appService.searchingName({pageSize:this.currentPage}).subscribe((data:any)=>{
  //       this.totalItems=data.count;
  //       this.studentData=data.mylist;
  //       this.lastPage=data.lastPage;
  //       this.currentPage=data.pageSize;
  //       this.noOfItemsOnthisPage=data.limit;
  
  //       this.appService.getStudentData().subscribe();
  //     })
  //   }
  // }

  // //max items on one page
  // onLimitChange(event:any){
  //   console.log(event.target.value)
  //   let info={sortField:this.sortField,sortType:this.sortType,limit:event.target.value}
  //   this.appService.searchingName(info).subscribe((data:any)=>{
  //     this.totalItems=data.count;
  //     this.studentData=data.mylist;
  //     this.lastPage=data.lastPage;
  //     this.currentPage=data.pageSize;
  //     this.noOfItemsOnthisPage=data.limit;

  //     this.appService.getStudentData().subscribe();
  //   })

  // }


  // appendData(){
  //   const mainDiv= document.querySelector('.mainTable');
  //   let table = document.createElement("table");
  //   let trHead=document.createElement("tr");
  //   let tdId = document.createElement("td");
  //   tdId.innerText="#ID";
  //   let tdName= document.createElement("td");
  //   tdName.innerText="Name";
  //   let tdContact= document.createElement("td");
  //   tdContact.innerText="Contact";
  //   let tdAadhar= document.createElement("td");
  //   tdAadhar.innerText="Aadhar";
  //   let tdAddress= document.createElement("td");
  //   tdAddress.innerText="Address";
  //   let tdCourse= document.createElement("td");
  //   tdCourse.innerText="Course";
  //   let tdAction= document.createElement("td");
  //   tdAction.innerText="Action";
  //   let p = document.createElement('p');
  //   p.innerText="hey";
  //   console.log("dom :"+mainDiv);
    // trHead.append(tdId,tdName,tdContact,tdAadhar,tdAddress,tdCourse,tdAction);
    // table.append(trHead);
    // mainDiv.append(table);
    
    // let k: keyof this.studentData;
    // for(k in this.studentData)
    // for(){
    //   let trBody= document.createElement("tr");
    //   let tdStId= document.createElement("td");
    //   tdStId.innerText=std;
    // }
    


  // }


}
