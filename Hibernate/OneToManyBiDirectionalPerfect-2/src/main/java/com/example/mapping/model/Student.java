package com.example.mapping.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="student")
public class Student {
	
	@Id
	@NonNull
	private Integer sid;
	@NonNull
	private String sname;
	@NonNull
	private Double sfee;
	
	@OneToMany(mappedBy = "student",cascade = CascadeType.ALL)
	private List<Course> course;

}
