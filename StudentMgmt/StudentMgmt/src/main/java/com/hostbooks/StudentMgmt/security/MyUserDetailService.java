package com.hostbooks.StudentMgmt.security;

import com.hostbooks.StudentMgmt.userRepo.UserRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    UserRepositary userRepositary;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepositary.findByUsername(username);
        if(user==null){
            throw new UsernameNotFoundException("No User found");
        }
        return new MyUserDetails(user) ;
    }
}
