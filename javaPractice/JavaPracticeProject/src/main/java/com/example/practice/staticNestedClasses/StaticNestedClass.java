package com.example.practice.staticNestedClasses;

public class StaticNestedClass {
	static int a = 10;
	static int b = 20;

	static class Inner {
		int c = 30;

		void m1() {
			System.out.println(a);
			System.out.println(b);
			System.out.println(c);
		}
	};

	public static void main(String[] args) {
		StaticNestedClass o = new StaticNestedClass();
		StaticNestedClass.Inner i = new StaticNestedClass.Inner();
		i.m1();
	}
};

