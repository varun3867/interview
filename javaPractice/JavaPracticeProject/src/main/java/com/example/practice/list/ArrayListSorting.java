package com.example.practice.list;

import java.util.ArrayList;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/*
 * 
 * LinkedList -- iterator and listIterator
 * vector -- enumeration, iterator and listiterator
 * stack  -- 
 * 
 * */
class Emp{
	int empid;
	String empname;
	public Emp(int empid, String empname) {
		this.empid= empid;
		this.empname=empname;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return "Emp[Emp Id : "+empid+", Emp Name :"+empname+"]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + empid;
		result = prime * result + ((empname == null) ? 0 : empname.hashCode());
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Emp other = (Emp) obj;
		if (empid != other.empid)
			return false;
		if (empname == null) {
			if (other.empname != null)
				return false;
		} else if (!empname.equals(other.empname))
			return false;
		return true;
	}
	
	
	
	
}

public class ArrayListSorting {
	
	public static void main(String[] args) {
		
		System.out.println("-----------------Integer Sorting-------------------------------");
		ArrayList<Integer> al = new ArrayList<>(Arrays.asList(3,2,7,1,0));
		System.out.println(al);
		Collections.sort(al);
		System.out.println("Ascending order : "+al);
		Collections.sort(al,Collections.reverseOrder());
		System.out.println("Descending order : "+al);
		
		System.out.println("------------------String Sorting--------------------------------");
		ArrayList<String> al1 = new ArrayList<>(Arrays.asList("y","a","t","p","c","b"));
		System.out.println(al1);
		Collections.sort(al1);
		System.out.println("Ascending order : "+al1);
		Collections.sort(al1, Collections.reverseOrder());
		System.out.println("Descending order : "+al1);
		
		System.out.println("---------ArrayList Sorting using Emp obj Comparator -------------------------");
		//Comparator<Emp> c= (e1,e2)->(e1.empid>e2.empid)?1:(e1.empid<e1.empid)?-1:0;
		List<Emp> h2 = new ArrayList<Emp>();
		h2.add(new Emp(2,"ratan"));
		h2.add(new Emp(5,"anu"));
		h2.add(new Emp(3,"ranjit"));
		h2.add(new Emp(1,"pranav"));
		h2.add(new Emp(4,"yanjit"));
		
		//practice
		List<Emp> collect = h2.stream().filter(e->e.empid>2).collect(Collectors.toList());
		System.out.println("collecttttttttttttt : " + collect);
		
		
		System.out.println("ArrayList [h2] Before Sorting : "+h2);
		List<Emp> c2 = h2.stream().sorted((e1,e2)->(e1.empid>e2.empid)?-1:(e1.empid<e2.empid)?1:0).collect(Collectors.toList());
		List<Emp> c5 = h2.stream().sorted((e1,e2)->-e1.empname.compareTo(e2.empname)).collect(Collectors.toList());
		System.out.println("ArrayList Soritng Emp Obj : "+c2);
		System.out.println("ArrayList Sorting Emp Obj : "+c5);
		List<Emp> AscendingOrderH2 = h2.stream().sorted((e1,e2)->(e1.empid>e2.empid)?1:(e1.empid<e2.empid)?-1:0).collect(Collectors.toList());
		System.out.println("Ascending order order of H2 : "+AscendingOrderH2);
	}
}
