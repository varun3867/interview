package com.example.mapping.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
@RequiredArgsConstructor
@Data
@Entity
@Table(name="Coursetabrrr")
public class Course {
	
	@NonNull
	private Integer cid;
	
	@Id
	@NonNull
	private String cname;
	
	@OneToMany(mappedBy = "course")
	//@JoinColumn(name="courseFK")
	private List<Review> review;

}


/* --------------------------------------------------
 * |	cid					|	cname				|
 * |------------------------|-----------------------|
 * |	1					|	Amigo Randam		|
 * |	2					|	Samiga Chigan		|
 * |	3					|	Rovin Haram			|
 * --------------------------------------------------
 */
