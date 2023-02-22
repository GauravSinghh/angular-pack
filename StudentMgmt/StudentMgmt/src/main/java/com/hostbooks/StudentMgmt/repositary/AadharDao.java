package com.hostbooks.StudentMgmt.repositary;

import com.hostbooks.StudentMgmt.entity.Aadhar;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AadharDao extends JpaRepository<Aadhar,Long> {
}
