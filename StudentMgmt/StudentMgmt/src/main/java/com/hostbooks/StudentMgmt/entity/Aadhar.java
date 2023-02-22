package com.hostbooks.StudentMgmt.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
public class Aadhar {

    @Id
    private Long aadharNo;

    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private Student student;
}
