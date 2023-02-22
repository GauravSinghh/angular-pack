package com.hostbooks.StudentMgmt.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer studentId;
    private String studentName;

    @ManyToMany(cascade = CascadeType.ALL,mappedBy = "student")
    private List<Course> course;

    private String contactNo;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "student")
    private List<Address> address;

    @OneToOne(cascade = CascadeType.ALL,mappedBy = "student")
    private Aadhar aadhar;
}
