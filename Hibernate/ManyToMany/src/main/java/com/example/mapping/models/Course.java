package com.example.mapping.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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
@Table(name="coursemm")
public class Course {
	
	@Id
	@NonNull
	private Integer cid;
	@NonNull
	private String cname;
	
	@ManyToMany(mappedBy = "courses")
	private List<Student> students;

}
