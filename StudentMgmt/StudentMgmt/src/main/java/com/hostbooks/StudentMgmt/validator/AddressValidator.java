package com.hostbooks.StudentMgmt.validator;

import com.hostbooks.StudentMgmt.controller.AddressController;
import com.hostbooks.StudentMgmt.controller.StudentController;
import com.hostbooks.StudentMgmt.entity.Address;
import com.hostbooks.StudentMgmt.entity.Student;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.ControllerAdvice;

@ControllerAdvice(assignableTypes = AddressController.class)
@Qualifier("validator")
public class AddressValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
         return Address.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "cityName", "500","Name Can't be Blank");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "stateName", "500", "State can't be blank");
        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "pincode", "500", "Pincode can't be blank");
        Address address=(Address) target;

//        if (!address.getPincode().) {
//            errors.rejectValue("pincode", "500","Enter pincode properly");
//        }
//        if (student.getContactNo() == null || student.getContactNo().length()<10) {
//            errors.rejectValue("contactNo", "500","Enter Contact properly");
//        }
//        if(student.getName().length()<= 0 || student.getName()==null) {
//            errors.rejectValue("name", "500", "Enter the student name");
//        }

    }
}
