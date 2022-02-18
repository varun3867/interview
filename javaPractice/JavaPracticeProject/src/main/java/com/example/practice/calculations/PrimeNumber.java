package com.example.practice.calculations;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class PrimeNumber {

	public static void main(String[] args) {
		
		List<Integer> list = new ArrayList<>(Arrays.asList(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21));
		List<Integer> prime = list.stream().filter(i->{
			if(i==1 || i==2 || i==3)
				return true;
			else {
				for(int j=2;j<=i/2;j++) {
					if(i%j==0)
						return false;
				}
			}
			return true;}).collect(Collectors.toList());
		//prime.forEach(System.out::println);
		System.out.println(prime);
	}

}
