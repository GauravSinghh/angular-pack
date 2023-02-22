package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.Address;
import com.hostbooks.StudentMgmt.exceptions.AddressNotFoundException;

import java.util.List;

public interface AddressService {

    public List<Address> getAllAddress();
    public Address addAddress(Address address, Integer studentId);
    public Address updateAddress(Address address) throws Exception;
    public String deleteAddress(Integer addressId);

}
