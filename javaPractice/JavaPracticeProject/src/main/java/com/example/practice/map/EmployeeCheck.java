package com.example.practice.map;

import java.util.HashMap;
import java.util.Map;

import com.example.practice.model.Employee;

/*
 * If two different objects(or different reference variables) have the same hashcode, then equals method will be
 * executed.
 * If same object, value will be overloaded 
 * 
 * 
 * 
 * */

public class EmployeeCheck {
	
	public static void main(String[] args) {
		Employee emp = new Employee(1, "ramu","rajampet",20000.0);
		Employee emp1 = new Employee(2, "ramu","tirupathi",30000.0);
		HashMap<Employee,String> m = new HashMap<>();
		m.put( emp,"Active");
		m.put( emp1,"Active");
		//System.out.println("hascode of two strings is : "+emp.getEname().hashCode()+"  "+emp1.getEname().hashCode());
		System.out.println(m);
	}

}
