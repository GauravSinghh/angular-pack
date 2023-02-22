package com.hostbooks.StudentMgmt.validator;

import com.hostbooks.StudentMgmt.controller.StudentController;
import com.hostbooks.StudentMgmt.entity.Info;
import com.hostbooks.StudentMgmt.entity.Student;
import com.hostbooks.StudentMgmt.entity.StudentDto;
import com.hostbooks.StudentMgmt.repositary.AadharDao;
import com.hostbooks.StudentMgmt.repositary.StudentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice(assignableTypes = StudentController.class)
@Qualifier("studentValidator")
public class StudentValidator implements Validator {

    @Autowired
    AadharDao aadharDao;
    @Autowired
    private StudentDao studentDao;


    @Override
    public boolean supports(Class<?> clazz) {
        boolean check = Student.class.equals(clazz) || Info.class.equals(clazz) ;
       return check;

    }

    @Override
    public void validate(Object target, Errors errors) {

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "studentName", "500","Name Can't be Blank");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "contactNo", "500", "Contact can't be blank");
        Student student=(Student) target;

//        if(info.getLimit()!=null){
//            errors.rejectValue("limit","600","Limit");
//        }if(info.getSortField()!=null){
//            errors.rejectValue("sortField","600","Limit");
//        }if(info.getSortType()!=null){
//            errors.rejectValue("sortType","600","Limit");
//        }if(info.getSearchItem()!=null){
//            errors.rejectValue("searchItem","600","Limit");
//        }if(info.getPageSize()!=null){
//            errors.rejectValue("pageSize","600","Limit");
//        }

//        if (student.getStudentName() == null && student.getStudentName().length()<=1) {
//            errors.reject("500", "Enter Name properly");
//        }
        if (student.getContactNo() == null || student.getContactNo().length()<10) {
            errors.reject("501","Enter 10 digits contact no");
        }
//        if(student.getAadhar().getAadharNo()==null||student.getAadhar().getAadharNo()<=0){
//            errors.rejectValue("aadhar","501","Enter aadhar");
//        }

        if(student.getAadhar().getAadharNo()<100000000000l||student.getAadhar().getAadharNo()>999999999999l){
            errors.reject("501","Enter 12 digits aadhar no");
        }

    if(aadharDao.existsById(student.getAadhar().getAadharNo())&&!studentDao.existsById(student.getStudentId())){
        errors.rejectValue("aadhar","500","Aadhar already present with this number");
    }


    }
}
