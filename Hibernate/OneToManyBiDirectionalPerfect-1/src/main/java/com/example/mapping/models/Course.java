package com.example.mapping.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
@Table(name="course")
public class Course {
	
	
	@Id
	@NonNull
	private Integer cid;
	@NonNull
	private String cname;
	
	@ManyToOne
	private Student student;

}
