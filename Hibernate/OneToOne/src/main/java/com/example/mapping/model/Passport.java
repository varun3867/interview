package com.example.mapping.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
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
@Table(name="passport")
public class Passport {
	
	@Id
	@NonNull
	private Integer pid;
	@NonNull
	private String pcenter;
	
	@OneToOne(mappedBy = "passport")
	private Student student;
}
