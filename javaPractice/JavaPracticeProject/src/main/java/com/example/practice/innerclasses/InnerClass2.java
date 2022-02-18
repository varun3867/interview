package com.example.practice.innerclasses;

/*
 *
 *  Declaring the class inside another class is called normal inner classes.
 *  The inner class is able to access outer class private properties
 *  Inside the inner classes it is not possible to declare static members 
 *  hence inside the inner classes it is not possible to declare main method 
 *  because main is static.
*/
/*
class Outer {
	void m1() {
		System.out.println("outer class m1()");
	}

	class Inner {
		void m1() {
			Outer.this.m1();
			System.out.println("inner class m1()");
		}
	};
};

class InnerClass2 {
	public static void main(String[] ratan) {
		Outer.Inner i = new Outer().new Inner();
		i.m1();
	}
};
*/