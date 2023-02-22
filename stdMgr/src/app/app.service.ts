import{ HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Address } from './address.entity';
import { Info } from './info.entity';
import { Student } from './student.entity';

@Injectable({
    providedIn:'root'
})
export class AppService{
    currentStudentId:number;
    StudentOriginData:Object;
    courseOriginData:Object;


    constructor(private http:HttpClient){}


//Login page
    
    // LoginPage(){
    //     let user ={username:"henry",password:"mid"}
    //     let url='http://localhost:8080/login';
    //     return this.http.post(url,user);
    // }

//StudentApi 

    getStudentData(){
        let url='http://localhost:8080/students';
        return this.http.get(url);
    }

    addStudentData(data:Student){
        let url='http://localhost:8080/student/add';
        return this.http.post(url,data);

    }
    getStudentById(id:number){
        let url='http://localhost:8080/student/get';
        return this.http.get(url);
    }

    updateStudent(data:Student){
        let url='http://localhost:8080/student/update';
        return this.http.put(url,data);
    }

    deleteStudent(id:number){
        let url=`http://localhost:8080/student/${id}/delete`;
        return this.http.delete(url);
    }

//AddressApi

addAddress(data:Address,id:number){
let url=`http://localhost:8080/address/${id}`;
return this.http.post(url,data);
}

//Aadhar

addAadhar(data,id:number){
    let url=`http://localhost:8080/aadhar/${id}`;
    return this.http.post(url,data);
}


//courseApi
addCourse(data,id:number){
    let url=`http://localhost:8080/course/${id}`;
    return this.http.post(url,data);
}

getCourseList(){
    let url='http://localhost:8080/course';
    return this.http.get(url);
}

deleteCourse(id){
    let url=`http://localhost:8080/course/${id}`;
    return this.http.delete(url);
}

//Pagination 
searchingName(data){
   
    console.log(data);
    let url='http://localhost:8080/pagination';
    return this.http.post(url,data);
 }

 //sessionLogin
 getAuthorisedConfirmation(){
    let url = 'http://localhost:8080/session/login';
    return this.http.get(url,{responseType:'Text' as 'json'});
 }

}