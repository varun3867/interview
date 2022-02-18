package com.example.practice.exception;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

public class ExceptionDemo {

	public static void main(String[] args) {
		
		
		throw new InvalidEmployeeException();
		

	}
	
	

}

@Configuration
class Configurations{
	
	@Bean
	public ExceptionDemo getExceptionDemo() {
		return new ExceptionDemo();
	}
}
