package com.example.practice.streamapi;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;
/*
 * 	1 -- change
 * -1 -- no change
 *  0 -- equal/null/don't do anything
 * */
public class StreamsAPIPractice {
	
	public static void main(String[] args) {
		List<Integer> asList = Arrays.asList(1,2,3,4,5,6,7,6,8,8);
		
		System.out.println("asList : "+asList);
		
		//map() as Intermediate operation
		List<Integer> map = asList.stream().map(i -> i=i*0).collect(Collectors.toList());
		System.out.println("map : "+map);
		
		//filter() as Intermediate operation
		List<Integer> filter = asList.stream().filter(i -> i%2 == 0).collect(Collectors.toList());
		System.out.println("filter : "+filter);
		
		
		//skip() as Intermediate Operation
		//Returns a stream after skipping first n elements
		List<Integer> skip = asList.stream().filter(i -> i%2 == 0).skip(2).collect(Collectors.toList());
		System.out.println("skip : "+skip);
		
		//limit() as Intermediate Operation
		//Returns a stream containing first n elements
		List<Integer> limit = asList.stream().filter(i -> i%2 == 0).limit(2).collect(Collectors.toList());
		System.out.println("limit : "+limit);
		
		//distinct() as Intermediate Operation
		//Returns a stream on unique operations/elements
		List<Integer> distinct = asList.stream().filter(i -> i%2 == 0).distinct().collect(Collectors.toList());
		System.out.println("distinct : "+distinct);
		
		System.out.println("-------------------Soring Integers--------------------------------------------");
		//sorted() as Intermediate operation
		List<Integer> collectDefaultSorting = asList.stream().sorted().collect(Collectors.toList());
		System.out.println("collectDefaultSorting -- Ascending order : "+collectDefaultSorting);

		
		List<Integer> collectDescendingOrder = asList.stream().sorted((i,j) -> (i>j) ? -1 : (i<j) ? 1: 0).collect(Collectors.toList());
		System.out.println("collectDescendingOrder -- Descending order : "+collectDescendingOrder);
		
		System.out.println("-------------------Soring String--------------------------------------------");
		List<String> stringList = Arrays.asList("rajiv","anup","saketh","bablu","sarthak");
		List<String> StringDefaultAscending = stringList.stream().sorted().collect(Collectors.toList());
		System.out.println("StringDefaultAscending  : "+StringDefaultAscending);
		
//		List<String> StringDescending = stringList.stream().sorted((i,j)-> j.compareTo(i)).collect(Collectors.toList());
		List<String> StringDescending = stringList.stream().sorted((i,j)-> -i.compareTo(j)).collect(Collectors.toList());
		System.out.println("StringDesceding : "+StringDescending);

		
		System.out.println("-----------------------Terminal Operations--------------------------");
		
		//reduce() as Terminal operation
		List<Integer> asList2 = Arrays.asList(3,5,1);
		Integer reduce = asList2.stream().reduce(0, (i,j) -> i+j);
		System.out.println("reduce : "+reduce);
		
		Optional<Integer> reduce1 = asList2.stream().reduce((i,j)->i+j);
		System.out.println("reduce : "+reduce1);
		
		Optional<String> stringReduce = stringList.stream().reduce((i,j)-> i+"-"+j);
		if(stringReduce.isPresent())
			System.out.println("stringReduce : "+stringReduce.get());
		
		
		List<String> stringList1 = Arrays.asList("han","strea");
		String stringReduceElse = stringList1.stream().reduce((i,j)-> i+"-"+j).orElse("empty");
		System.out.println("stringReduceElse : "+stringReduceElse);
		
		List<String> asList3 = Arrays.asList();
		//String reduceStringOrElse = asList3.stream().reduce((i,j)-> i.length() > j.length() ? i : j).orElse("nothing to compare");
		String LongestreduceStringOrElse = stringList.stream().reduce((i,j)-> i.length() > j.length() ? i : j).orElse("nothing to compare");
		System.out.println("[Longest String] LongestreduceStringOrElse : "+LongestreduceStringOrElse);

		String SmallestreduceStringOrElse = stringList.stream().reduce((i,j)-> i.length() < j.length() ? i : j).orElse("nothing to compare");
		System.out.println("[Smallest String] SmallestreduceStringOrElse : "+ SmallestreduceStringOrElse);
		
		//foreach() as Terminal operation
		asList.stream().filter(i -> i%2 == 0).forEach(System.out::println);

		//toArray() returns object array so try not to use this as termainl operation
		Integer[] array = asList.stream().filter(i -> i%2 == 0).toArray(Integer[]::new);
		for(Integer i:array) {
			System.out.print(i+"\t");
		}
		System.out.println();
		//min() as Terminal operation
		Optional<Integer> min = asList.stream().filter(i -> i%2 == 0).min((i,j)-> (i>j) ? 1 : (i<j) ? -1: 0);
		if(min.isPresent())
			System.out.println("min value is : "+min.get());
		
		
		//max() as Terminal operation
		Optional<Integer> max = asList.stream().filter(i -> i%2 == 0).max((i,j)-> (i>j) ? 1 : (i<j) ? -1: 0);
		if(max.isPresent())
			System.out.println("max value is : "+max.get());
		Integer maxElse = asList.stream().filter(i -> i%2 == 0).max((i,j)-> (i>j) ? 1 : (i<j) ? -1: 0).orElse(0);
		System.out.println("maxElse value is : "+maxElse);

		
		//count() as Terminal operation
		long count = asList.stream().filter(i -> i%2 == 0).count();
		System.out.println("count value is : "+count);
		
		//collect() as Teminal operation into list
		List<Integer> collectList = asList.stream().filter(i -> i%2 == 0).collect(Collectors.toList());
		System.out.println("collect as List"+collectList);
		
		
		//collect() as Terminal operation into set
		Set<Integer> collectSet = asList.stream().filter(i -> i%2 == 0).collect(Collectors.toSet());
		System.out.println("collect as Set"+collectSet);
		
		//anyMatch() as Terminal operation
		//Returns true if any one element of the stream matches with given predicate
		boolean anyMatch = asList.stream().filter(i -> i%2 == 0).anyMatch(i -> i%2 == 0);
		System.out.println("anyMatch : "+anyMatch);
		
		//allMatch() as Terminal operation
		//Returns true if any all elements of the stream matches with given predicate
		boolean allMatch = asList.stream().filter(i -> i%2 == 0).allMatch(i -> i%2 == 0);
		System.out.println("allMatch : "+allMatch);
		
		//noneMatch() as Terminal operation
		//Returns true if only all elements of the stream doesn't matches with given predicate
		boolean noneMatch = asList.stream().filter(i -> i%2 == 0).noneMatch(i -> i%2 == 0);
		System.out.println("noneMatch : "+noneMatch);
		
		//findFirst() as Terminal operation
		//Returns first element of a stream wrapped in an Optional object
		Optional<Integer> findFirst = asList.stream().filter(i -> i%2 == 0).findFirst();
		if(findFirst.isPresent())
			System.out.println("findFirst : "+findFirst.get());
		
		
		//findAny() as Terminal operation
		//Randomly returns one element in a stream
		Optional<Integer> findAny = asList.stream().filter(i -> i%2 == 0).findAny();
		if(findAny.isPresent())
			System.out.println("findAny : "+findAny.get());
		
		
		
		
		
	}
	
}
