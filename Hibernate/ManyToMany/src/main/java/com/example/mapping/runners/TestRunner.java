package com.example.mapping.runners;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.mapping.Repositories.CourseRepository;
import com.example.mapping.Repositories.StudentRepository;
import com.example.mapping.models.Course;
import com.example.mapping.models.Student;

@Component
public class TestRunner implements CommandLineRunner {
	
	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private StudentRepository studentRepo;

	@Override
	public void run(String... args) throws Exception {
		
		Course c1 = new Course(101, "Maths");
		Course c2 = new Course(102, "Social");
		Course c3 = new Course(103, "Physics");
		
		courseRepo.save(c1);
		courseRepo.save(c2);
		courseRepo.save(c3);
		
		Student s1 = new Student(1, "varun", 200.0, Arrays.asList(c1,c2));
		studentRepo.save(s1);
		
		System.out.println("------------------------Done-------------------");
		
		
		

	}

}
