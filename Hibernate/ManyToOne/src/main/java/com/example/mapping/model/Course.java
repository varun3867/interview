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


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="Coursetabr")
public class Course {
	

	private Integer cid;
	
	@Id
	private String cname;
	


}


/* --------------------------------------------------
 * |	cid					|	cname				|
 * |------------------------|-----------------------|
 * |	1					|	Amigo Randam		|
 * |	2					|	Samiga Chigan		|
 * |	3					|	Rovin Haram			|
 * --------------------------------------------------
 */
