package com.hostbooks.StudentMgmt.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.context.annotation.Bean;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Info {

    private Integer pageSize=1;
    private Integer limit=5;
    private String sortType;
    private String sortField;
    private String searchItem;
}
