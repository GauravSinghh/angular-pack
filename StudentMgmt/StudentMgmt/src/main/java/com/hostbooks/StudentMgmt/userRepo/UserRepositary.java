package com.hostbooks.StudentMgmt.userRepo;

import com.hostbooks.StudentMgmt.security.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositary extends JpaRepository<User,String> {
    public User findByUsername(String username);


}
