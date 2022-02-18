package com.example.practice.innerclasses;

class Outer {
	class Inner1 {
		void m1() {
			System.out.println("Inner1 method");
		}
	}

	class Inner2 extends Inner1 {
		void m2() {
			System.out.println("Inner2 method");
		}
	}
}

public class FinalInnerClassTest {
	public static void main(String[] args) {
		Outer.Inner2 i = new Outer().new Inner2();
		i.m1();
		i.m2();
	}
}
