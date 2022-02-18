package com.example.mapping.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.mapping.model.Passport;
import com.example.mapping.model.Student;
import com.example.mapping.repository.PassportRepository;
import com.example.mapping.repository.StudentRepository;

@Component
public class TestRunner implements CommandLineRunner {
	
	@Autowired
	private StudentRepository studentRepository;
	@Autowired
	private PassportRepository passportRepository;
	
	
	@Override
	public void run(String... args) throws Exception {
		
		Passport p1 = new Passport(11, "vijayawada");
		Passport p2 = new Passport(12, "tirupathi");
		Passport p3 = new Passport(13, "Hyderbad");
		
		passportRepository.save(p1);
		passportRepository.save(p2);
		passportRepository.save(p3);
		
		Student s1 = new Student(1, "rajiv", 2000.0, p1);
		Student s2 = new Student(2, "ramesh", 2000.0, p2);
		Student s3 = new Student(3, "sanjiv", 2000.0, p3);
		
		studentRepository.save(s1);
		studentRepository.save(s2);
		studentRepository.save(s3);
		
		System.out.println("----------------------Done------------------");
		
	}
}
