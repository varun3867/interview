package com.example.mapping.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@NoArgsConstructor
@RequiredArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="student")
public class Student {
	
	@Id
	@NonNull
	private Integer sid;
	
	@NonNull
	private String sname;
	
	@OneToMany(mappedBy = "student",fetch = FetchType.EAGER)
	//@JoinColumn(name="studentId")
	private List<Course> courses;

}
