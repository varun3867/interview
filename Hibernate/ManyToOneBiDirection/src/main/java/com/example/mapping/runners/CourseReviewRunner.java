package com.example.mapping.runners;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.mapping.model.Course;
import com.example.mapping.model.Review;
import com.example.mapping.repository.CourseRepository;
import com.example.mapping.repository.ReviewRepository;

@Component
public class CourseReviewRunner implements CommandLineRunner{
	
	@Autowired
	private CourseRepository cr;
	@Autowired
	private ReviewRepository rr;

	@Override
	public void run(String... args) throws Exception {
		
		Course c1 = new Course(1, "Amigo Randam");
		Course c2 = new Course(2, "Samiga Chigan");
		Course c3 = new Course(3, "Rovin Haram");
		
		cr.save(c1);
		cr.save(c2);
		cr.save(c3);
		
		
		
		Review r1 = new Review(101, "The book is good thinghs that I have ever listen", c1);
		Review r2 = new Review(102, "Very nice stories was writtern", c1);
		Review r3 = new Review(103, "Great Things are Described Here", c2);
		Review r4 = new Review(104, "Very Good to Read", c3);
		
		rr.save(r1);
		rr.save(r2);
		rr.save(r3);
		rr.save(r4);

		System.out.println("-------------Mapping Done---------------");
		
	}

}


