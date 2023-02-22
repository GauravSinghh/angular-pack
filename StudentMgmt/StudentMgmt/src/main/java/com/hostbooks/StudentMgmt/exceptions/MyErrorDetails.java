package com.hostbooks.StudentMgmt.exceptions;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MyErrorDetails {
    private LocalDateTime timeStamp;
    private String message;
    private String details;

}
