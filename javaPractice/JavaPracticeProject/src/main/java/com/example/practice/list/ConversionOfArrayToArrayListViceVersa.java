package com.example.practice.list;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ConversionOfArrayToArrayListViceVersa {
	
	public static void main(String[] args) {

		
		System.out.println("-------------------String Array to ArrayList---------------------------------");

		String[] str={"ratan","Sravya","aruna"};
		ArrayList<String> al = new ArrayList<String>(Arrays.asList(str));
		al.add("newperson-1");
		al.add("newperson-2");
		//printing data by using enhanced for loop
		for (String s: al)
		{	System.out.println(s);
		}

		System.out.println("----------------------Interger Array to ArrayList------------------------------");
		
		Integer[] arr = {1,2,3};
		ArrayList<Integer> al1 = new ArrayList<Integer>(Arrays.asList(arr));
		System.out.println(al1);
		
		System.out.println("---------------------ArrayList to String Array-------------------------------");
		
		
		List<String> al2 = new ArrayList<String>(); 
		al2.add("anu");
		al2.add("Sravya");
		al2.add("ratan");
		al2.add("natraj");
		String[] a = new String[al2.size()]; 
		al2.toArray(a);
		//for-each loop to print the data
		for (String s:a)
		{
			System.out.println(s);
		}
		
		System.out.println("---------------------ArrayList to Object Array-------------------------------");

		ArrayList al3 = new ArrayList(); 
		al3.add(10);
		al3.add('c');
		al3.add("ratan");
		//converison of ArrayList to array
		Object[] o = al3.toArray();
		for (Object oo :o)
		{	
			System.out.println(oo);
		}
		
		System.out.println("----------------------------------------------------");


		
		
		
		
		
		
	}
	
}
