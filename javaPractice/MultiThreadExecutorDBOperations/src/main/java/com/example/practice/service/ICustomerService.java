package com.example.practice.service;

import java.util.List;

import com.example.practice.model.Customer;

public interface ICustomerService {
	
	public int addCustomers();
	
	public List<Customer> fetchLimitedCustomers(int i, int j);
}
