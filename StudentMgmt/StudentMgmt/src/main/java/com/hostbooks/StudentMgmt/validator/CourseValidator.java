package com.hostbooks.StudentMgmt.validator;

import com.hostbooks.StudentMgmt.controller.CourseController;
import com.hostbooks.StudentMgmt.controller.StudentController;
import com.hostbooks.StudentMgmt.entity.Course;
import com.hostbooks.StudentMgmt.entity.Student;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice(assignableTypes = CourseController.class)
@Qualifier("courseValidator")
public class CourseValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
         return Course.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "courseName", "500","Name Can't be Blank");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "courseDetails", "500", "Details can't be blank");
        Course course=(Course) target;

        if (course.getCourseName()==null||course.getCourseName().length()<2) {
            errors.reject("501", "Enter Name properly");
        }

        if (course.getCourseDetails()==null||course.getCourseDetails().length()<2) {
            errors.reject("501", "Enter Name properly");
        }
//        if (student.getContactNo() == null || student.getContactNo().length()<10) {
//            errors.rejectValue("contactNo", "500","Enter Contact properly");
//        }
//        if(student.getName().length()<= 0 || student.getName()==null) {
//            errors.rejectValue("name", "500", "Enter the student name");
//        }

    }
}
