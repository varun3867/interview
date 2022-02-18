package com.example.practice.methodlocalInnerClasses;

class MethodLocalInnerClass3 {
	private int a = 100;

	void m1() {
		int b = 200;
		//final int b = 200;// local variables must be final variables(upto 1.7 version) 
		// 1.8 verison optional
		class Inner {
			void m1() {
				System.out.println("inner class m1()");
				System.out.println(a);
				System.out.println(b);
			}
		}
		
		Inner i = new Inner();
		i.m1();
	}

	public static void main(String[] args) {
		new MethodLocalInnerClass3().m1();
	}
};
