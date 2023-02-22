package com.hostbooks.StudentMgmt.validator;

import com.hostbooks.StudentMgmt.controller.AadharController;
import com.hostbooks.StudentMgmt.controller.StudentController;
import com.hostbooks.StudentMgmt.entity.Aadhar;
import com.hostbooks.StudentMgmt.repositary.AadharDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice(assignableTypes = AadharController.class)
@Qualifier("validator")
public class AadharValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return Aadhar.class.equals(clazz);
    }

    @Autowired
    AadharDao dao;

    @Override
    public void validate(Object target, Errors errors) {
        Aadhar aadhar= (Aadhar) target;

      //  ValidationUtils.rejectIfEmpty(errors,"aadharNo","500","Aadhar no. can't be Blank");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors,"aadharNo","500","Aadhar no. can't be Blank");

        if(dao.existsById(aadhar.getAadharNo())){
            errors.rejectValue("aadharNo","500","Aadhar already present");
        }
        if(!dao.existsById(aadhar.getAadharNo())){
            errors.rejectValue("aadharNo","500","Aadhar not present");
        }
        if(aadhar.getAadharNo()==null){
            errors.reject("500","Aadhar can' be null");
        }
//        if(aadhar.getAadharNo()<1|| aadhar.getAadharNo()>999999999){
//            errors.rejectValue("aadharNo", "500", "Aadhar should be of 8 digits");
//        }
    }
}
