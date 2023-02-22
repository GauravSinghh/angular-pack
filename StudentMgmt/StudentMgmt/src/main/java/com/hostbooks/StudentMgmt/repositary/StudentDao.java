package com.hostbooks.StudentMgmt.repositary;

import com.hostbooks.StudentMgmt.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentDao extends JpaRepository<Student,Integer> {
}
