package com.hostbooks.StudentMgmt.controller;

import com.hostbooks.StudentMgmt.entity.Address;
import com.hostbooks.StudentMgmt.entity.Course;
import com.hostbooks.StudentMgmt.exceptions.CourseNotFoundException;
import com.hostbooks.StudentMgmt.exceptions.MyErrorDetails;
import com.hostbooks.StudentMgmt.service.CourseServiceImpl;
import com.hostbooks.StudentMgmt.validator.CourseValidator;
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
public class CourseController {

    @Autowired
    CourseServiceImpl courseService;

    @Qualifier("courseValidator")
    @Autowired
    CourseValidator courseValidator;
    @InitBinder
    public void initBinder(WebDataBinder binder){
        binder.setValidator(courseValidator);
    }

    @GetMapping("/course")
    ResponseEntity<List<Course>> getAllCourseHandler(){
        return  new ResponseEntity<List<Course>>(courseService.getAllCourse(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/course/{studentId}")
    ResponseEntity<?> saveCourseHandler(
            @PathVariable Integer studentId,
            @Valid @RequestBody Course course,
                                             Errors errors,
                                             WebRequest wr)  {
    courseValidator.validate(course,errors);
    if(errors.hasErrors()){
        return new ResponseEntity<>(errors.getAllErrors() ,HttpStatus.BAD_REQUEST);
    }
        return new ResponseEntity<>(courseService.addCourse(course,studentId),HttpStatus.ACCEPTED);
    }

    @PutMapping("/course/")
    ResponseEntity<Course> updateCourseHandler(@RequestBody Course course) throws CourseNotFoundException {
        return new ResponseEntity<Course>(courseService.updateCourse(course),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/course/{courseId}")
    ResponseEntity<String> deleteCourseHandler(@PathVariable Integer courseId){
        return new ResponseEntity<String>(courseService.deleteCourse(courseId),HttpStatus.OK);
    }
}

