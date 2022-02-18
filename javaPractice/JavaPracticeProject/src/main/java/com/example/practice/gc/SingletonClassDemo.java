package com.example.practice.gc;


class Test {
	
	private static final Test sing=null;
	int i = 1;
	private Test() {
		
		i++;
		
	}
	
	public static Test getInstance() {
		if(sing==null)
			return new Test();
		return sing;
		
	}

}
public class SingletonClassDemo{
	
	public static void main(String[] args) {
		Test s = Test.getInstance();
		System.out.println("First : "+s.i);
		Test s1 = Test.getInstance();
		System.out.println("Second : "+s1.i);
	}
	
	
}