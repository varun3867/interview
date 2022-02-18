package com.example.practice.staticNestedClasses;

/*
 * Declaring the class inside another class with static modifier is called static
 * inner classes.
 * The normal inner class is able to access both static & non-static members of 
 * outer class but static inner class is able to access only static members of outer 
 * class.

 * */
/*
// Allows both static&non-static members of Outer class.
class Outer {
	int a = 10; // instance varaible
	static int b = 20; // static variable

	class Inner {

		void m1() {
			System.out.println(a);
			System.out.println(b);
		}
	}
}
	
public class StaticNestedClasses {

	public static void main(String[] args) {
		new Outer().new Inner().m1();

	}

}

*/
