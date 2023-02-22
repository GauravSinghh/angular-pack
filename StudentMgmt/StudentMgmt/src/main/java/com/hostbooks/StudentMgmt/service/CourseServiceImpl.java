package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.Course;
import com.hostbooks.StudentMgmt.entity.Student;
import com.hostbooks.StudentMgmt.exceptions.CourseNotFoundException;
import com.hostbooks.StudentMgmt.repositary.CourseDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    CourseDao courseDao;
    @Autowired
    StudentServiceImpl studentService;

    @Override
    public List<Course> getAllCourse() {
        return courseDao.findAll();
    }

    @Override
    public Course addCourse(Course course,Integer studentId) {
        Student student=studentService.getStudentById(studentId);
        Optional<Course> optCourse = courseDao.findById(course.getCourseId());
        if(optCourse.isPresent() ){
            Course course1= optCourse.get();
            course1.getStudent().add(student);
            student.getCourse().add(course1);
            return courseDao.save(course1);
        }
        List<Student> studentList=course.getStudent();
        List<Course> courseList = student.getCourse();

        courseList.add(course);
        studentList.add(student);
      //  course.setStudent(student);
       // courseList.add(course);
        //student.setCourse(courseList);
        return courseDao.save(course);
    }

    @Override
    public Course updateCourse(Course course) throws CourseNotFoundException {
        Optional<Course> optCourse= courseDao.findById(course.getCourseId());
        if(optCourse.isPresent()){
            Course course1 =optCourse.get();
            List<Student> studentList=course1.getStudent();
            studentList.forEach((student -> student.getCourse().add(course)));
            course.setStudent(studentList);
//            Student student= course1.getStudent();
//            course.setStudent(student);
//            student.getCourse().add(course);

            return courseDao.save(course);

        }

    throw new CourseNotFoundException("Course Not found");

    }

    @Override
    public String deleteCourse(Integer courseId) {
        String msg = "Course not found with Id: "+ courseId;

        Optional<Course> optCourse= courseDao.findById(courseId);
        if(optCourse.isPresent()){
            msg="Course deleted with id : "+courseId;
            courseDao.delete(optCourse.get());
        }
        return msg;
    }

}

