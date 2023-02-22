package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.Aadhar;
import com.hostbooks.StudentMgmt.exceptions.AadharNotFoundException;

import java.util.List;

public interface AadharService {
    public List<Aadhar> getListOfAadhar();

    public Aadhar saveAadhar(Aadhar aadhar,Integer studentId) throws Exception;

    public Aadhar updateAadhar(Aadhar aadhar) throws Exception;

    public  String deleteAadhar(Long aadharNo);
}
