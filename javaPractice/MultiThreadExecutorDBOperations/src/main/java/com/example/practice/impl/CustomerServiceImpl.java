package com.example.practice.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.practice.model.Customer;
import com.example.practice.repository.CustomerRepository;
import com.example.practice.service.ICustomerService;

@Service
public class CustomerServiceImpl implements ICustomerService{
	
	@Autowired
	private CustomerRepository repo;

	@Override
	public int addCustomers() {
		int i = 0;
		for(i=0;i<4000;i++) {
			repo.save(new Customer("name - "+i, 40, 95000.0));
		}
		return i;
	}

	public List<Customer> fetchEmployees() {
		
		 return repo.findAll();
		
	}

	@Override
	public List<Customer> fetchLimitedCustomers(int i, int j) {
		List<Customer> limitedCustomers = repo.findByIdBetween(i, j);
		return limitedCustomers;
	}

}
