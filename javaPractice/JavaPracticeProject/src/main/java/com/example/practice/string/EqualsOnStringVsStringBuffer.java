package com.example.practice.string;

public class EqualsOnStringVsStringBuffer {	
	
	EqualsOnStringVsStringBuffer(String str){}
	
	public static void main(String[] args)
	{
		
		EqualsOnStringVsStringBuffer t1 = new EqualsOnStringVsStringBuffer("ratan");
		EqualsOnStringVsStringBuffer t2 = new EqualsOnStringVsStringBuffer("ratan");
		
		System.out.println(t1==t2);	//reference comparison	false
		//Object class equals() method executed (reference comparison)
		System.out.println(t1.equals(t2)); //reference comparison	false

		String str1="anu";
		String str2="anu";
		System.out.println(str1==str2);  //reference comparison	true
		//String class equals() method executed (content comparison)
		System.out.println(str1.equals(str2));  //content comparison	true

		String str3 = new String("Sravya");
		String str4 = new String("Sravya");
		System.out.println(str3==str4);	//reference comparison false
		//String class equals() method executed (content comparison)
		System.out.println(str3.equals(str4));	//content comparison true

		StringBuffer sb1 = new StringBuffer("students"); 
		StringBuffer sb2 = new StringBuffer("students");
		System.out.println(sb1==sb2);	//reference comparison	false
		//StringBuffer class equals() executed (reference comparison)
		System.out.println(sb1.equals(sb2));	//reference comparison	false
	}
}

