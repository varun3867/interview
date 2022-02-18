package com.example.mapping.runner;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.mapping.models.Course;
import com.example.mapping.models.Student;
import com.example.mapping.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.mapping.repository.StudentRepository;

@Component
public class TestRunner implements CommandLineRunner {
	
	@Autowired
	private StudentRepository sr;
	
	@Autowired
	private CourseRepository cr;

	@Override
	public void run(String... args) throws Exception {
		
		
		Student s1 = new Student(101,"ranvir");
		Student s2 = new Student(102,"Sanjay");
		sr.save(s1);
		sr.save(s2);
		
		Course c1 = new Course(1,"Mathematics",s1);
		Course c2 = new Course(2,"Social",s2);
		Course c3 = new Course(3,"Science",s1);
		cr.save(c1);
		cr.save(c2);
		cr.save(c3);
		
		System.out.println("---------------Done--------------");
		
	}

}
