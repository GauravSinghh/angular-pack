package com.hostbooks.StudentMgmt.repositary;

import com.hostbooks.StudentMgmt.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseDao extends JpaRepository<Course,Integer> {
}

