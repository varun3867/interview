package com.example.practice.model;

public class TestEmployee {
	
	public static void main(String[] args) {
		Employee emp = new Employee(1, "ratan");
		Employee emp1 = new Employee();
		Employee emp2 = new Employee();
		boolean result = emp1.equals(emp2);//reference comparision
		String superClassString = emp.superToString();
		
		// getClass().getName() + "@" + Integer.toHexString(hashCode());
		//com.example.practice.model.Employee@15db9742
		System.out.println(superClassString);
		System.out.println(result); //true
		System.out.println(emp1); //Employee [eid=null, ename=null]
	}
	

}
