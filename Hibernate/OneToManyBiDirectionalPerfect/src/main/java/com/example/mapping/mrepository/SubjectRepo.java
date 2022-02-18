package com.example.mapping.mrepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.model.Subject;

public interface SubjectRepo extends JpaRepository<Subject, Integer> {

}
