package com.example.mapping.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="student")
public class Student {
	@Id
	private Integer sid;
	private String sname;
	private Double sfee;
	
	@ManyToOne
	@JoinColumn(name="student_id",unique = true)
	private Passport passport;
}
