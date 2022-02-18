package com.example.practice.exception;

public class InvalidEmployeeException extends RuntimeException {

//	private static final long serialVersionUID = 1L;
//	public InvalidEmployeeException() {
//		// TODO Auto-generated constructor stub
//	}
//	public InvalidEmployeeException(String message){
//		super(message);
//	}
	
	String a;
	public InvalidEmployeeException() {
		
	}
	
	public InvalidEmployeeException(String a) {
		this.a = a;
	}
	
	@Override
		public String toString() {
			// TODO Auto-generated method stub
			return "Exception : "+a;
		}
	
}




class InvalidEmployeeExceptionn extends Exception{
	
	public InvalidEmployeeExceptionn(){
		
	}
	public InvalidEmployeeExceptionn(String message) {
		super(message);
	}
}
