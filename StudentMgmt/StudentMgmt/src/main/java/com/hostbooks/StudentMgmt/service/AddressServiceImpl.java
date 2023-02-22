package com.hostbooks.StudentMgmt.service;

import com.hostbooks.StudentMgmt.entity.Address;
import com.hostbooks.StudentMgmt.entity.Student;
import com.hostbooks.StudentMgmt.exceptions.AddressNotFoundException;
import com.hostbooks.StudentMgmt.repositary.AddressDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddressServiceImpl implements AddressService{
    @Autowired
    AddressDao addressDao;
    @Autowired
    StudentServiceImpl studentService;
    @Override
    public List<Address> getAllAddress() {
        return addressDao.findAll();
    }

    @Override
    public Address addAddress(Address address, Integer studentId) {
        Student std = studentService.getStudentById(studentId);

        std.getAddress().add(address);
        //std.setAddress(address);
        address.setStudent(std);
        return addressDao.save(address);
    }

    @Override
    public Address updateAddress(Address address) throws AddressNotFoundException {
        Optional<Address> optAddress= addressDao.findById(address.getAddressId());
        if(optAddress.isPresent()){
            Address address1= optAddress.get();
            Student student= address1.getStudent();
          //  student.setAddress(address);
            student.getAddress().add(address);
            address.setStudent(student);
            return addressDao.save(address);
        }
        throw new AddressNotFoundException("Address not found/not updated");

    }

    @Override
    public String deleteAddress(Integer addressId) {
        String msg = "Address not found with Id: "+ addressId;

        Optional<Address> optAddress= addressDao.findById(addressId);
        if(optAddress.isPresent()){
            msg="Address deleted with id : "+addressId;
            Address address=optAddress.get();
            Student student= address.getStudent();
            student.setAddress(null);
            addressDao.delete(address);
        }
        return msg;
    }
}


