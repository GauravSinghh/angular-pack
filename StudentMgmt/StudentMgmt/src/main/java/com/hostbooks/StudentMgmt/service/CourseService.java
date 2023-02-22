package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.Course;
import com.hostbooks.StudentMgmt.exceptions.CourseNotFoundException;

import java.util.List;

public interface CourseService {

    public List<Course> getAllCourse();
    public Course addCourse(Course course,Integer studentId);
    public Course updateCourse(Course course) throws Exception;
    public String deleteCourse(Integer courseId);
}

