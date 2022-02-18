package com.example.practice.tryCatch;

/*
 * do not write anything in between try, catch and finally blocks
 * */
public class ExceptionEx {

	public static void main(String[] args) {
		
		try {
			throw new ArithmeticException();
			//return;
		}
		catch(Exception e) {
			System.out.println("Caught Exeption in catch block.....");
			//e.printStackTrace();
			return;
		}
		finally {
			System.out.println("finally block");
		}
	}

}
