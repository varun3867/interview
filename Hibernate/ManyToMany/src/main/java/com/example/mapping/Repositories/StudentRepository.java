package com.example.mapping.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.models.Student;


public interface StudentRepository extends JpaRepository<Student, Integer> {

}
