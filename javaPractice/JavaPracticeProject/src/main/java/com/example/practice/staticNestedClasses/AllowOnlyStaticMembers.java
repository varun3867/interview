package com.example.practice.staticNestedClasses;

//Allows only static members of outer class. 
class Outer {
	static int a = 10; // static variable
	int b = 20; // instance variable

	static class Inner {
		void m1() {
			System.out.println(a);
//			System.out.println(b); // compilation error
		}
	}
}

public class AllowOnlyStaticMembers {

	public static void main(String[] args) {
//		new Outer().new Inner().m1();
	}

}
