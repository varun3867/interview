package com.example.mapping.rep;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.model.Dept;

public interface DeptRepo extends JpaRepository<Dept, Integer> {

}
