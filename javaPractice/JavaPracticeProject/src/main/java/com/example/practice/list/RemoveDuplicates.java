package com.example.practice.list;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

public class RemoveDuplicates {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Emp> asList = Arrays.asList(new Emp(1, "Sanjiv"),new Emp(1, "Sanjiv"));
		System.out.println(asList);
		Set<Emp> collect = asList.stream().collect(Collectors.toSet());
		System.out.println(collect);

	}

}
