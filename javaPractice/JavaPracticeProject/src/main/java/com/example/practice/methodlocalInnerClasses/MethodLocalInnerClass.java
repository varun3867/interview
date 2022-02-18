package com.example.practice.methodlocalInnerClasses;

/*
2.	Method local inner classes:-
	Declaring the class inside the method is called method local inner classes.
	The scope is only within the method.it means whenever the method is completed inner class object destroyed.
	The applicable modifiers on method local inner classes are final & abstract . 
*/


/*
class Outer {
	private int a = 100;

	void m1() {
		class Inner {
			void m2() {
				System.out.println("inner class method");
				System.out.println(a);
			}
		}
		Inner i = new Inner();
		i.m2();
	}
};

class MethodLocalInnerClass {
	public static void main(String[] args) {
		Outer o = new Outer();
		o.m1();
	}
};

*/