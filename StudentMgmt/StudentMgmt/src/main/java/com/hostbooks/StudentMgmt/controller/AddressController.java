package com.hostbooks.StudentMgmt.controller;


import com.hostbooks.StudentMgmt.entity.Address;
import com.hostbooks.StudentMgmt.exceptions.AddressNotFoundException;
import com.hostbooks.StudentMgmt.exceptions.MyErrorDetails;
import com.hostbooks.StudentMgmt.service.AddressServiceImpl;
import com.hostbooks.StudentMgmt.validator.AadharValidator;
import com.hostbooks.StudentMgmt.validator.AddressValidator;
import org.springframework.beans.factory.annotation.Autowired;
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
public class AddressController {

    @Autowired
    AddressServiceImpl addressService;
    @Autowired
    AddressValidator addressValidator;
    @InitBinder
    public void initBinder(WebDataBinder binder){
        binder.setValidator(addressValidator);
    }

    @GetMapping("/address/")
    ResponseEntity<List<Address>> getAllAddressHandler(){
        return  new ResponseEntity<List<Address>>(addressService.getAllAddress(), HttpStatus.ACCEPTED);
    }

    @PostMapping("/address/{studentId}")
    ResponseEntity<?> saveAddressHandler(
            @PathVariable int studentId,
            @Valid @RequestBody Address address,
            Errors errors,
            WebRequest wr
            ){
        addressValidator.validate(address,errors);
        if (errors.hasErrors()){
            return new ResponseEntity<>(errors.getAllErrors(),HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(addressService.addAddress(address,studentId),HttpStatus.ACCEPTED);
    }

    @PutMapping("/address/")
    ResponseEntity<Address> updateAddressHandler(@RequestBody Address address) throws AddressNotFoundException {
        return new ResponseEntity<Address>(addressService.updateAddress(address),HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/address/{addressId}")
    ResponseEntity<String> deleteAddressHandler(@PathVariable Integer addressId){
        return new ResponseEntity<String>(addressService.deleteAddress(addressId),HttpStatus.OK);
    }
}
