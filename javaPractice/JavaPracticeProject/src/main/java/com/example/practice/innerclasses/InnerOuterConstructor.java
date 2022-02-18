package com.example.practice.innerclasses;

class InnerOuterConstructor {
	InnerOuterConstructor() {
		System.out.println("outer class cons");
	}

	class Inner {
		Inner() {
			System.out.println("Inner class cons");
		}
	}

	public static void main(String[] args) {
		new InnerOuterConstructor().new Inner();
	}
}

