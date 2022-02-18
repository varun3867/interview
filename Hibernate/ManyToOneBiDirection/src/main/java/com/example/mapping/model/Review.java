package com.example.mapping.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="Reviewtabrrr")
public class Review {
	
	@Id
	private Integer rid;
	private String description;
	
	@ManyToOne
	//@JoinColumn(name="courseFK")
	private Course course;

}


/*
 * -------------------------------------------------------------------------------------------
 * |	rid     | 	description     										|	courseFK	 |
 * -------------|-----------------------------------------------------------|----------------|
 * |	101		|	The book is good thinghs that I have ever listen		|	Amigo Randam |
 * |	102		|	Very nice stories was writtern							|	Amigo Randam |
 * |	103		| 	Great Things are Described Here							|	Samiga Chigan|
 * |	104		|	Very Good to Read										|	Rovin Haram  |
 * -------------------------------------------------------------------------------------------
 * 
 */
