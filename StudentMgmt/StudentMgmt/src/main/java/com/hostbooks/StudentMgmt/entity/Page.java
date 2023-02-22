package com.hostbooks.StudentMgmt.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Page {

    private List<?> mylist=new ArrayList<>();
    private Integer count;
    private Integer lastPage;
    private Integer	pageSize;
    private Integer limit;
}
