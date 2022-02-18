package com.javatechie;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class practice {
	
	public static void main(String[] args) {
		
		List<Customer> all = EkartDataBase.getAll();

		List<String> collect = all.stream().map(e->e.getEmail()).collect(Collectors.toList());
		//collect.forEach(System.out::println);
		System.out.println(collect);
		
		List<List<String>> phoneNumbers = all.stream().map(e->e.getPhoneNumbers()).collect(Collectors.toList());
		System.out.println(phoneNumbers);
		
		List<String> collect2 = all.stream().flatMap(e->e.getPhoneNumbers().stream()).collect(Collectors.toList());

		System.out.println(collect2);
		
		List<Integer> l = new ArrayList<Integer>(Arrays.asList(1,2,3,4,5,6,7,8,9));
		List<Integer> l2 =  l.stream().map(i->i*i*i).collect(Collectors.toList());
		System.out.println(l2);
		
		

		
		
	}

}
