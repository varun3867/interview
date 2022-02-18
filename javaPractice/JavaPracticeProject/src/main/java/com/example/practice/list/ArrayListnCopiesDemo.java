package com.example.practice.list;

import java.util.*;

import com.example.practice.model.Employee; 
class ArrayListDemo
{	
	public static void main(String[] args)
	{
		Employee e1 = new Employee(111,"ratan");
		ArrayList<Employee> al = new ArrayList<Employee>(Collections.nCopies(5,e1));
		for (Employee e:al)
		{
			System.out.println(e.getEid()+"---"+e.getEname());
		}
		
		System.out.println("------------------------------------");
		ArrayList<String> al1 = new ArrayList<String>(); 
		String[] strArray={"ratan","anu","Sravya"}; 
		Collections.addAll(al1,strArray); 
		System.out.println(al1);
		System.out.println("------------------------------------");
		ArrayList<Integer> al2 = new ArrayList<Integer>(); 
		Integer[] intArray={1,2,3}; 
		Collections.addAll(al2,intArray); 
		System.out.println(al2);
	}
}
