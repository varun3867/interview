package com.practice.nestedclasses;

class Outer
{	
	static int a=10;
	static int b=20;
	static class Inner
	{	
		int c=30; 
		void m1()
		{	
			System.out.println(a); 
			System.out.println(b);
			System.out.println(c);
		}
	};
	public static void main(String[] args)
	{	
		Outer o=new Outer(); 
		Outer.Inner i=new Outer.Inner(); 
		i.m1();
	}
};

