package com.example.mapping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.model.Course;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}
