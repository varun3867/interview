package com.example.practice.yasdemo;

public class checkB {
	{
		System.out.println("in instance block");
	}
	static {
		System.out.println("in static block");
	}
	public static void main(String[] args) {
		System.out.println("in main");
		checkA a = new checkA();
		a.m1();
	}
	

}
