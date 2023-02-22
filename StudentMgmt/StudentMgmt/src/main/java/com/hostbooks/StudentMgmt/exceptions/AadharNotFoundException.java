package com.hostbooks.StudentMgmt.exceptions;

public class AadharNotFoundException extends Exception{

    public AadharNotFoundException(){
        super();
    }

    public AadharNotFoundException(String message){
        super(message);
    }
}
