package com.hostbooks.StudentMgmt.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StudentDto {
    private Integer studentId;
    private String studentName;

    private List<Course> course;

    private String contactNo;

    private List<Address> address;

    private Aadhar aadhar;
    private Integer pageSize=1;
    private Integer limit=3;
    private String sortType;
    private String sortField;
    private String searchItem;
}
