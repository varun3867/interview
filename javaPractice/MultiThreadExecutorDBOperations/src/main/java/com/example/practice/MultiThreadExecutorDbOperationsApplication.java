package com.example.practice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class MultiThreadExecutorDbOperationsApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext run = SpringApplication.run(MultiThreadExecutorDbOperationsApplication.class, args);
	}

}
