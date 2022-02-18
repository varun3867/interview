package com.example.mapping.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.models.Course;


public interface CourseRepository extends JpaRepository<Course, Integer> {

}
