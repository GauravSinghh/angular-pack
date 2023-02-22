package com.hostbooks.StudentMgmt.controller;


import com.hostbooks.StudentMgmt.entity.Info;
import com.hostbooks.StudentMgmt.entity.Page;
import com.hostbooks.StudentMgmt.entity.Student;
import com.hostbooks.StudentMgmt.exceptions.MyErrorDetails;
import com.hostbooks.StudentMgmt.exceptions.StudentNotFoundException;
import com.hostbooks.StudentMgmt.service.AadharServiceImpl;
import com.hostbooks.StudentMgmt.service.StudentServiceImpl;
import com.hostbooks.StudentMgmt.validator.StudentValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class StudentController {

    @Autowired
    StudentServiceImpl studentService;
    @Autowired
    AadharServiceImpl aadharService;
    @Qualifier("studentValidator")
    @Autowired
    StudentValidator studentValidator;
    @InitBinder
    public void initBinder(WebDataBinder binder){
        binder.setValidator(studentValidator);
    }


    @GetMapping("/students")
    ResponseEntity<List<Student>> getAllStudentHandler(){
        return new ResponseEntity<List<Student>>(studentService.getAllStudents(), HttpStatus.ACCEPTED);
    }

//    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/home")
    public String homePage(){
        return "This is home page";
    }

    @GetMapping("student/get/{id}")
    ResponseEntity<Student> getStudentByIdHandler(@PathVariable Integer id){
        return  new ResponseEntity<Student>(studentService.getStudentById(id),HttpStatus.ACCEPTED);
    }
    @PostMapping("/student/add")
    ResponseEntity<?> addStudentHandler(
            @Valid @RequestBody Student student,
            Errors errors,
            WebRequest wr) throws Exception {

        studentValidator.validate(student,errors);
        if (errors.hasErrors()){
            return new ResponseEntity<>(errors.getAllErrors(),HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(studentService.addStudent(student),HttpStatus.ACCEPTED);
    }

    @PutMapping("/student/update")
    ResponseEntity<?> updateStudentHandler(   @Valid @RequestBody Student student,
                                                    Errors errors) throws StudentNotFoundException {
        studentValidator.validate(student,errors);
        if (errors.hasErrors()){
            return new ResponseEntity<>(errors.getAllErrors(),HttpStatus.BAD_REQUEST);
        }

        return new ResponseEntity<Student>(studentService.updateStudent(student),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/student/{studentId}/delete")
    ResponseEntity<?> deleteStudentHandler(@PathVariable Integer studentId) throws StudentNotFoundException {
        return new ResponseEntity<>(studentService.deleteStudent(studentId),HttpStatus.OK);
    }


    @GetMapping("/student/cq/{studentName}")
    ResponseEntity<?> getStudentListUsingCQHandler(@PathVariable String studentName){
        return new ResponseEntity<>(studentService.getStudentList(studentName),HttpStatus.OK);
    }


    @PostMapping("/pagination")
    ResponseEntity<?> paginationHandler(@RequestBody Info info){
        return  new ResponseEntity<>(studentService.pagination(info),HttpStatus.ACCEPTED);
    }
//    @PostMapping("/paginaion")
//    Page paginationHandler(@RequestBody Info info){
//        return this.studentService.pagination(info);
//    }
}