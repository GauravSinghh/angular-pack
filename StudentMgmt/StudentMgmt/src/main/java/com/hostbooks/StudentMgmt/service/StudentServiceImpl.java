package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.*;
import com.hostbooks.StudentMgmt.exceptions.AadharNotFoundException;
import com.hostbooks.StudentMgmt.exceptions.StudentNotFoundException;
import com.hostbooks.StudentMgmt.repositary.AadharDao;
import com.hostbooks.StudentMgmt.repositary.StudentDao;
import com.hostbooks.StudentMgmt.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    StudentDao studentDao;

    @Autowired
    AadharDao aadharDao;


    @PersistenceContext
    EntityManager em;


    @Override
    public List<Student> getAllStudents() {
        return studentDao.findAll();
    }

    public Student getStudentById(Integer studentId){
        return studentDao.findById(studentId).get();
    };

    @Override
    public Student addStudent(Student student) throws Exception {
    Optional<Student> optStudent= studentDao.findById(student.getStudentId());

        Aadhar aadhar= student.getAadhar();
        Optional<Aadhar> aadharOpt= aadharDao.findById(aadhar.getAadharNo());
        if(aadharOpt.isPresent()){
            throw new AadharNotFoundException("Aadhar already present with this Number");
        }
        if(aadhar==null){
            throw new AadharNotFoundException("Aadhar value isn't added!");
        }
        if(aadhar.getAadharNo()==null){
            throw new AadharNotFoundException("Aadhar Number isn't added!");
        }
        aadharDao.save(aadhar);
    if(optStudent.isPresent()){
        throw new StudentNotFoundException("student already present with this id");
    }else{
        aadhar.setStudent(student);

        return studentDao.save(student);

    }
    }

    @Override
    public Student updateStudent(Student student) throws StudentNotFoundException {
        Optional<Student> optStd= studentDao.findById(student.getStudentId());
        Aadhar aadhar= student.getAadhar();
        aadharDao.save(aadhar);
        if(optStd.isPresent()){
            aadhar.setStudent(student);
            return studentDao.save(student);

        }
        throw new StudentNotFoundException("Student not found by this id");
    }

    @Override
    public Student deleteStudent(Integer studentId) throws StudentNotFoundException {

        Optional<Student> optStd= studentDao.findById(studentId);
        if(optStd.isPresent()){
            Student student =optStd.get();
            studentDao.delete(optStd.get());
            return student;
        }
        throw  new StudentNotFoundException("Student not found with this id");
    }


    @Override
    public Page pagination(Info info) {
       Long count=null;
       Integer pageNumber=0;
       Boolean check = false;
       CriteriaBuilder cb = em.getCriteriaBuilder();
       CriteriaQuery<Student> cq = cb.createQuery(Student.class);
       Root<Student>  studentRoot = cq.from(Student.class);
       CriteriaQuery<Student> select =cq.select(studentRoot);

       //for searching in course
//        CriteriaQuery<Course> cqCourse = cb.createQuery(Course.class);
//        Root<Course>  courseRoot = cq.from(Course.class);
//        CriteriaQuery<Course> select1 =cqCourse.select(courseRoot);

       if(info.getSearchItem()!=null&& !info.getSearchItem().isEmpty()){
           Predicate predicate1=cb.like(studentRoot.get("studentName"),"%"+info.getSearchItem()+"%");
      //     Predicate predicate2=cb.like(courseRoot.get("courseName"),"%"+info.getSearchItem()+"%");

           Predicate resFinal= cb.or(predicate1);
           cq.where(resFinal);

           CriteriaBuilder cb1 = em.getCriteriaBuilder();
           CriteriaQuery<Long> cq1=cb1.createQuery(Long.class);
           cq1.select(cb1.count(cq1.from(Student.class)));
           em.createQuery(cq1);
           cq1.where(predicate1);
           count=em.createQuery(cq1).getSingleResult();
           int pageSize=info.getLimit();

           if (count != pageSize) {
               pageNumber = (int) ((count / pageSize) + 1);
               System.out.println(count);
               System.out.println(pageNumber);
           } else {
               pageNumber = (int) ((count / pageSize));
               System.out.println(count);
               System.out.println(pageNumber);
           }
           check = true;
       }

        Order order;
       if(info.getSortField()!=null&&!info.getSortField().isEmpty()){
           if(info.getSortType().equals(("desc"))){
               order = cb.desc(studentRoot.get(info.getSortField()));

           }else{
               order = cb.asc(studentRoot.get(info.getSortField()));
           }
       }else{
           order=cb.asc(studentRoot.get("studentId"));
       }

       cq.orderBy(order);

       TypedQuery<Student> typedQuery = em.createQuery(select);
       typedQuery.setFirstResult((info.getPageSize()-1)*info.getLimit());
       typedQuery.setMaxResults(info.getLimit());
       List<?> result = typedQuery.getResultList();

       if(check==false){
           Query queryTotal =em.createQuery(
                   "Select count(f.id) from Student f"
           );
           count =(long) queryTotal.getSingleResult();
           int pageSize = info.getLimit();
           if(count==pageSize){
               pageNumber=(int)((count/pageSize));
           }else{
               pageNumber=(int)((count/pageSize)+1);
               System.out.println(pageNumber);
           }
       }

        return new Page(result, count.intValue(), pageNumber, info.getPageSize(), info.getLimit());
    }


    //getting student list from names using criteria query
    @Override
    public List<Student> getStudentList(String studentName){

        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Student> cq =cb.createQuery(Student.class);

        Root<Student> student = cq.from(Student.class);
        Predicate studentNamePredicate = cb.equal(student.get("studentName"),studentName);
        cq.where(studentNamePredicate);

        TypedQuery<Student> query=em.createQuery(cq);
        return query.getResultList();


       // return null;

    }
}
