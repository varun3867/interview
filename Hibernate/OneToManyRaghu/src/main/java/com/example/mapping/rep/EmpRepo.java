package com.example.mapping.rep;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.model.Employee;

public interface EmpRepo extends JpaRepository<Employee, Integer> {

}
