package com.hostbooks.StudentMgmt.controller;

import com.hostbooks.StudentMgmt.entity.Aadhar;
import com.hostbooks.StudentMgmt.exceptions.AadharNotFoundException;
import com.hostbooks.StudentMgmt.exceptions.MyErrorDetails;
import com.hostbooks.StudentMgmt.service.AadharServiceImpl;
import com.hostbooks.StudentMgmt.validator.AadharValidator;
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
public class AadharController {

    @Autowired
    AadharServiceImpl aadharService;
    @Qualifier("validator")
    @Autowired
   AadharValidator aadharValidator;
    @InitBinder
    public void initBinder(WebDataBinder binder){
        binder.setValidator(aadharValidator);
    }
    @GetMapping("/aadhar")
    ResponseEntity <List<Aadhar>> getListOfAadharHandler(){
        return new ResponseEntity<List<Aadhar>>(aadharService.getListOfAadhar(), HttpStatus.OK);
    }

    @PostMapping("/aadhar/{studentId}")
    ResponseEntity<?> saveAadharHandler (@PathVariable Integer studentId,
                                         @Valid @RequestBody Aadhar aadhar,
                                         Errors errors,
                                         WebRequest wr) throws AadharNotFoundException {

     aadharValidator.validate(aadhar,errors);
      if (errors.hasErrors()){
          return new ResponseEntity<>(errors.getAllErrors(),HttpStatus.BAD_REQUEST);
      }

        return new ResponseEntity<>(aadharService.saveAadhar(aadhar,studentId),HttpStatus.OK);
    }

    @PutMapping("/aadhar")
    ResponseEntity<Aadhar> updateAadharHandler(@RequestBody Aadhar aadhar) throws AadharNotFoundException {
        return new ResponseEntity<Aadhar>(aadharService.updateAadhar(aadhar),HttpStatus.OK);
    }

    @DeleteMapping("/aadhar/{aadharNo}")
    ResponseEntity<String> deleteAadharHandler(@PathVariable Long aadharNo){
        return new ResponseEntity<String>(aadharService.deleteAadhar(aadharNo),HttpStatus.OK);
    }
}
