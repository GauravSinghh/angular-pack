import { Aadhar } from "./aadhar.entity";
import { Address } from "./address.entity";

export class Student{
    constructor(
        private studentName:string,
        private studentId:number,
        private contactNo:string,
        private aadhar:Aadhar,
       
        ){}
}