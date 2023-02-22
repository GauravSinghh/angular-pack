package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.Info;
import com.hostbooks.StudentMgmt.entity.Page;
import com.hostbooks.StudentMgmt.entity.Student;
import com.hostbooks.StudentMgmt.exceptions.StudentNotFoundException;

import java.util.List;

public interface StudentService {
    public List<Student> getAllStudents()throws Exception;
    public Student getStudentById(Integer studentId)throws Exception;
    public Student addStudent(Student student) throws Exception;
    public Student updateStudent(Student student)throws Exception;
    public Student deleteStudent(Integer studentId)throws Exception;
    public Page pagination(Info info);

    //using Criteria Query
    public List<Student> getStudentList(String studentName);
}
