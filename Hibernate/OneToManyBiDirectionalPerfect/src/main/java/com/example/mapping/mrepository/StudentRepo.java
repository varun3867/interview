package com.example.mapping.mrepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {

}
