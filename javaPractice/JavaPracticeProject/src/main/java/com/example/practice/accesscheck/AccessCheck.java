package com.example.practice.accesscheck;

import com.example.practice.model.StudentClass;

/*
 * 	+---------------------------------------------------------------------------+
 * 	|Access Modifiers	|	class	|	package	|sub-class		|outside-world	|
 * 	----------------------------------------------------------------------------|
 * 	|public 			|	Work	|	Work	|	Work		|	Work		|
 * 	|protected			|	Work	|	Work	|	Work		|	Not Work	|
 * 	|default			|	Work	|	Work	|	Not Work	|	Not Work	|
 * 	|private			|	Work	|	Not Work|	Not Work	|	Not Work	|
 * 	+---------------------------------------------------------------------------+
 * 
 * */
public class AccessCheck extends StudentClass {
	
	public static void main(String[] args) {
		
		AccessCheck ac = new AccessCheck();
		//System.out.println(ac.d);
		
	}
	
	

}
