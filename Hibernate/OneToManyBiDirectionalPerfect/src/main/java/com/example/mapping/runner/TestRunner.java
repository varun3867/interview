package com.example.mapping.runner;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.mapping.model.Student;
import com.example.mapping.model.Subject;
import com.example.mapping.mrepository.StudentRepo;
import com.example.mapping.mrepository.SubjectRepo;

//@Component
public class TestRunner implements CommandLineRunner {
	
	@Autowired
	private StudentRepo studentRepository;
	
	@Autowired
	private SubjectRepo subjectrepository;

	@Override
	public void run(String... args) throws Exception {
		
		Subject s1 = new Subject(101, "English");
		Subject s2 = new Subject(102, "Hindi");
		Subject s3 = new Subject(103, "Maths");
		
		subjectrepository.save(s1);
		subjectrepository.save(s2);
		subjectrepository.save(s3);
		
		Student st1 = new Student(1, "rajiv", 2000.0, Arrays.asList(s1));
		//Student st2 = new Student(2, "ramu", 4000.0, Arrays.asList(s2,s3));
		//Student st3 = new Student(3, "sanjiv", 5000.0, Arrays.asList(s3));
		
		
		studentRepository.save(st1);
	//	studentRepository.save(st2);
		//studentRepository.save(st3);
		
		

	}

}
