package com.hostbooks.StudentMgmt.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(StudentNotFoundException.class)
    public ResponseEntity<MyErrorDetails> studentNotFoundExceptionHandler(StudentNotFoundException snf, WebRequest wr){
        MyErrorDetails err=new MyErrorDetails(LocalDateTime.now(),snf.getMessage(),wr.getDescription(false));
        return new ResponseEntity<MyErrorDetails>(err, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AddressNotFoundException.class)
    public ResponseEntity<MyErrorDetails> addressNotFoundExceptionHandler(AddressNotFoundException anf,WebRequest wr){
        MyErrorDetails err = new MyErrorDetails(LocalDateTime.now(),anf.getMessage(),wr.getDescription(false));
        return new ResponseEntity<MyErrorDetails>(err,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(CourseNotFoundException.class)
    public ResponseEntity<MyErrorDetails> courseNotFoundExceptionHandler(CourseNotFoundException anf,WebRequest wr){
        MyErrorDetails err = new MyErrorDetails(LocalDateTime.now(),anf.getMessage(),wr.getDescription(false));
        return new ResponseEntity<MyErrorDetails>(err,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AadharNotFoundException.class)
    public ResponseEntity<MyErrorDetails> aadharNotFoundExceptionHandler(AadharNotFoundException anf,WebRequest wr){
        MyErrorDetails err = new MyErrorDetails(LocalDateTime.now(),anf.getMessage(),wr.getDescription(false));
        return new ResponseEntity<MyErrorDetails>(err,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<MyErrorDetails> exceptionHandler(Exception e,WebRequest wr){
        MyErrorDetails err = new MyErrorDetails(LocalDateTime.now(),e.getMessage(),wr.getDescription(false));
        return new ResponseEntity<MyErrorDetails>(err,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public ResponseEntity<MyErrorDetails> noHandlerFoundExceptionHandler(NoHandlerFoundException e,WebRequest wr){
        MyErrorDetails err = new MyErrorDetails(LocalDateTime.now(),e.getMessage(),wr.getDescription(false));
        return new ResponseEntity<MyErrorDetails>(err,HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<MyErrorDetails> nullPointerExceptionHandler(NullPointerException e,WebRequest wr){
        MyErrorDetails err = new MyErrorDetails(LocalDateTime.now(),e.getMessage(),wr.getDescription(false));
        return new ResponseEntity<MyErrorDetails>(err,HttpStatus.BAD_REQUEST);
    }

}
