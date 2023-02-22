package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.Aadhar;
import com.hostbooks.StudentMgmt.entity.Student;
import com.hostbooks.StudentMgmt.exceptions.AadharNotFoundException;
import com.hostbooks.StudentMgmt.repositary.AadharDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AadharServiceImpl implements AadharService{

    @Autowired
    AadharDao dao;

    @Autowired
    StudentServiceImpl studentService;
    @Override
    public List<Aadhar> getListOfAadhar() {
        return dao.findAll();
    }

    @Override
    public Aadhar saveAadhar(Aadhar aadhar,Integer studentId) throws AadharNotFoundException {
        Student student=studentService.getStudentById(studentId);
        if(aadhar.getAadharNo()==null){
            throw new AadharNotFoundException("Aadhar can't be null");
        }
        if(aadhar.getAadharNo()==0 ){
            throw new AadharNotFoundException("Aadhar can't be blank");
        }
        Aadhar aadhar1= student.getAadhar();
        if(aadhar1==null){
            student.setAadhar(aadhar);
            aadhar.setStudent(student);
            return dao.save(aadhar);
        }
        throw new AadharNotFoundException("Aadhar already added");

    }

    @Override
    public Aadhar updateAadhar(Aadhar aadhar) throws AadharNotFoundException {
        Optional<Aadhar> optAadhar = dao.findById(aadhar.getAadharNo());
        if(optAadhar.isPresent()){
            Aadhar aadhar1=optAadhar.get();
            Student student= aadhar1.getStudent();
            student.setAadhar(aadhar);
            aadhar.setStudent(student);
            return dao.save(aadhar);
        }
    else
        throw new AadharNotFoundException("Aadhar Not found with id");
    }

    @Override
    public String deleteAadhar(Long aadharNo) {
        String msg=null;
       dao.delete(dao.findById(aadharNo).get());
       return "aadhar deleted";
    }
}
