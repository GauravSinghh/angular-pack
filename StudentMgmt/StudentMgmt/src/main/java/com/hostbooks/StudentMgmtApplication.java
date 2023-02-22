package com.hostbooks;

import com.hostbooks.StudentMgmt.security.User;
import com.hostbooks.StudentMgmt.userRepo.UserRepositary;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class StudentMgmtApplication implements CommandLineRunner {

	@Autowired
	UserRepositary userRepositary;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(StudentMgmtApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper(){
		return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception {

		User user1= new User();
		user1.setUsername("messi");
		user1.setPassword(this.bCryptPasswordEncoder.encode("barca"));
		user1.setEmail("messi@gmail.com");
		user1.setRole("ROLE_ADMIN");
		this.userRepositary.save(user1);

		User user2= new User();
		user2.setUsername("neymar");
		user2.setPassword(this.bCryptPasswordEncoder.encode("psg"));
		user2.setEmail("neymar@gmail.com");
		user2.setRole("ROLE_NORMAL");
		this.userRepositary.save(user2);
	}
}
