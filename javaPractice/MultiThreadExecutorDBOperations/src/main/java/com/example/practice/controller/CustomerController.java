package com.example.practice.controller;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.practice.impl.CustomerServiceImpl;
import com.example.practice.model.Customer;

@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CustomerServiceImpl custService;

	@GetMapping("/create")
	public String createCustomers() {
		int noOfCustomers = custService.addCustomers();
		return "Created " + noOfCustomers + " Customers";
	}

	@GetMapping("/get")
	public List<Customer> getAllCustomers() {
		long currentTime1 = System.currentTimeMillis();
		List<Customer> customers = custService.fetchEmployees();
		long currentTime2 = System.currentTimeMillis();
		System.out.println("Time taken to get all employee " + (currentTime2 - currentTime1));
		return customers;
	}

//	@GetMapping("/cust/{start}/{end}")
//	public List<Customer> getlimitedCustomer(@PathVariable int start,@PathVariable int end){

	@GetMapping("/cust")
	public List<Customer> getlimitedCustomer() throws IOException {
		long start = System.currentTimeMillis();
		FileOutputStream fos = new FileOutputStream("test.txt");
		ObjectOutputStream oos = new ObjectOutputStream(fos);
		List<Customer> customer = new ArrayList<>();
		ExecutorService es = Executors.newFixedThreadPool(4);
		es.execute(() -> {
			// long first = System.currentTimeMillis();

			List<Customer> fetch1 = custService.fetchLimitedCustomers(1, 1000);
			for (Customer c : fetch1) {
				try {
					oos.writeObject(c);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			// long second = System.currentTimeMillis();
			// System.out.println("Time taken to complete Part - 1 "+(second - first));

		});
		es.execute(() -> {
			// long first = System.currentTimeMillis();
			List<Customer> fetch2 = custService.fetchLimitedCustomers(1001, 2000);
			for (Customer c : fetch2) {
				try {
					oos.writeObject(c);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			// long second = System.currentTimeMillis();
			// System.out.println("Time taken to complete Part - 2 "+(second - first));
		});
		es.execute(() -> {
			// long first = System.currentTimeMillis();
			List<Customer> fetch3 = custService.fetchLimitedCustomers(2001, 3000);
			for (Customer c : fetch3) {
				try {
					oos.writeObject(c);
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			// long second = System.currentTimeMillis();
			// System.out.println("Time taken to complete Part - 3 "+(second - first));
		});
		es.shutdown();
		long end = System.currentTimeMillis();
		System.out.println("Time taken to complete all Tasks : " + (end - start));

		return null;

	}
}
