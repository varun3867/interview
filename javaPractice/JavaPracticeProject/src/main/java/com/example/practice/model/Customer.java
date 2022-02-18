package com.example.practice.model;

public class Customer {
	
	private String name;
	private Integer age;
	private Double salary;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public Double getSalary() {
		return salary;
	}
	public void setSalary(Double salary) {
		this.salary = salary;
	}
	public Customer(String name, Integer age, Double salary) {
		super();
		this.name = name;
		this.age = age;
		this.salary = salary;
	}
	
	@Override
	public boolean equals(Object obj) {
		System.out.println("came into equals....");
		return super.equals(obj);
	}
	
	@Override
	public int hashCode() {
		System.out.println("came into hashcode......");
		return super.hashCode();
	}
	

}
