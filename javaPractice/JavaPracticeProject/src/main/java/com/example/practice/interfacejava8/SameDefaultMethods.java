package com.example.practice.interfacejava8;

interface it1{
	
	
	default void m1() {
		System.out.println("From Interface it1");
	}
	int m2();
}

interface it2{
	
	default void m1() {
		System.out.println("From Interface it2");
	}
	int m3();
}

public class SameDefaultMethods implements it1,it2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		SameDefaultMethods s = new SameDefaultMethods();
		s.m1();
		//it1.super.m2();
	}

	@Override
	public void m1() {
		// TODO Auto-generated method stub
		it1.super.m1();
	}

	@Override
	public int m3() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int m2() {
		// TODO Auto-generated method stub
		return 0;
	}

}
