package com.example.practice.exception;

public class TryCatchLastStatement {

	public static void main(String[] args) {
		
		try {
			System.out.println("throwing ArithemeticException");
			throw new ArithmeticException();
		} catch (ArithmeticException e) {
			System.out.println("ArithmeticException occured");
		}
		finally {
			System.out.println("came into finally block");
		}
		System.out.println("ended...");
		
		
	}
}
