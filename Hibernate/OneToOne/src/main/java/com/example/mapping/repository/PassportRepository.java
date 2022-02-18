package com.example.mapping.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.mapping.model.Passport;

public interface PassportRepository extends JpaRepository<Passport, Integer>{

}
