package com.hostbooks.StudentMgmt.repositary;

import com.hostbooks.StudentMgmt.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressDao extends JpaRepository<Address,Integer> {
}
