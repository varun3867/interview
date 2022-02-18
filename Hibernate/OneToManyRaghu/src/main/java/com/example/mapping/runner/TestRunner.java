package com.example.mapping.runner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.example.mapping.model.Dept;
import com.example.mapping.model.Employee;
import com.example.mapping.rep.DeptRepo;
import com.example.mapping.rep.EmpRepo;

@Component
public class TestRunner implements CommandLineRunner {
	
	@Autowired
	private DeptRepo dr;
	@Autowired
	private EmpRepo er;

	@Override
	public void run(String... args) throws Exception {
		

		Dept d1=new Dept(440,"DEV", "SAME");
		
		Employee e1=new Employee(201, "AA", 33.50, d1);
		Employee e2=new Employee(202, "AB", 44.50, d1);
		Employee e3=new Employee(203, "BA", 55.50, d1);
		
		er.save(e1);
		er.save(e2);
		er.save(e3);
		
		System.out.println("--------------------------Done--------------------");

	}

}
