package com.example.practice.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.practice.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>
{
	
	public List<Customer> findByIdBetween(int start,int end);
	

}
