package com.hostbooks.StudentMgmt.controller;


import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200/")
public class BasicAuth {

    @PreAuthorize("hasAnyRole('ADMIN','NORMAL')")
    @GetMapping("session/login")
    public String getAuthorized(){

        return "Authorized";
    }
}
