package com.example.mapping.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="studentmm")
public class Student {
	
	@Id
	private Integer sid;
	private String sname;
	private double sfee;
	
	@ManyToMany
	@JoinTable(name="std_crs_tab",
	joinColumns = @JoinColumn(name="sfk"),
	inverseJoinColumns = @JoinColumn(name="cfk"))
	private List<Course> courses;

}
