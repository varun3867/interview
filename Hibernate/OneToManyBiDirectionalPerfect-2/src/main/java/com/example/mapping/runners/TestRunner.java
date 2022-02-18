package com.example.mapping.runners;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.mapping.model.Course;
import com.example.mapping.model.Student;
import com.example.mapping.repository.CourseRepository;
import com.example.mapping.repository.StudentRepository;

@Component
public class TestRunner implements CommandLineRunner {
	
	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Override
	public void run(String... args) throws Exception {
		
		
		Student s1 = new Student(1, "Varun", 200.0);
		Student s2 = new Student(2, "kumar", 300.0);
				
		studentRepo.save(s1);
		
		Course c1 = new Course(101, "Java",s1);
		Course c2 = new Course(102, "Hibernate",s1);
		Course c3 = new Course(103, "Cloud",s1);
		
		courseRepo.save(c1);
		courseRepo.save(c2);
		courseRepo.save(c3);
		
		System.out.println("--------------------Done-------------------------");

	}

}
