package com.example.practice.set;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.TreeSet;
import java.util.stream.Collectors;

/*
 * Hashset insertion order is not preserved as it based on hashcode of the object
 * LinkedHashset insertion order is preserved
 * Treeset insertion order not preserved as it sorts elements in some sorting order
 * 
 * Iterator cursor is used for Hashset, LinkedHashset and Treeset
 * 
 * “ratan”.compareTo(“anu”)		==>		+ve		==>change the order 
 * “ratan”.compareTo(“ratan”)	==>		0		==>no change 
 * “anu”.compareTo(“ratan”)		==>		-ve		==>no change
 * 
 * 
 * 
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
}
public class SetSoritng {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("---------Hashset of Integers-------------------------");
		Set<Integer> h6 = new HashSet<>(Arrays.asList(3,2,1,6,7,9,1,0,2));
		System.out.println(h6);
		

		
		System.out.println("---------Treeset of Integers using add() method-------------------------");
		Set<Integer> h7 = new TreeSet<>();
		h7.add(3);
		h7.add(2);
		h7.add(1);
		h7.add(4);
		h7.add(5);
		System.out.println(h7);
		
		
		System.out.println("---------Treeset of Integers and string using default Sorting and Custom Sorting Order-------------------------");
		Set<String> h4 = new TreeSet<>(Arrays.asList("ratan","jagath","pranav","ratan","pranav"));
		Set<Integer> h5 = new TreeSet<>(Arrays.asList(3,2,1,6,7,9,1,0,2));
		System.out.println("Treeset Strings Default Sorting : "+h4);
		System.out.println("Treeset Integers Default Sorting : "+h5);
		List<String> c3 = h4.stream().sorted((e1,e2)->-e1.compareTo(e2)).collect(Collectors.toList());
		List<Integer> c4 = h5.stream().sorted((e1,e2)->(e1>e2)?-1:(e1<e2)?1:0).collect(Collectors.toList());
		System.out.println("Treeset String Custom Sorting : "+c3);
		System.out.println("Treeset Integers Custom Sorting : "+c4);
		
		System.out.println("---------TreeSet Sorting using Emp obj Comparator -------------------------");
		
		
		//Set<Emp> s = new TreeSet<>((e1,e2)->e1.empname.compareTo(e2.empname));
//		Set<Emp> s = new TreeSet<>((e1,e2)->-e1.empname.compareTo(e2.empname));
		Set<Emp> s = new TreeSet<>((e1,e2)->(e1.empid > e2.empid) ? -1 : (e1.empid < e2.empid) ? 1 :0);
//		Set<Emp> s = new TreeSet<>((e1,e2)->(e1.empid > e2.empid) ? 1 : (e1.empid < e2.empid) ? -1 :0);
		s.add(new Emp(1, "ratan"));
		s.add(new Emp(3, "sita"));
		s.add(new Emp(4, "jamun"));
		s.add(new Emp(2, "anu"));
		System.out.println(s);
		
		System.out.println("-------------------------------------------------------------------------");
		
		TreeMap h = new TreeMap(); 
		h.put(111,"ratan");
		h.put(222,"anu");
		h.put(444,"aaa"); 
		System.out.println(h);

		System.out.println("Ceiling Key");
		System.out.println(h.ceilingKey(222)); 
		System.out.println("Ceiling Entry");
		System.out.println(h.ceilingEntry(333));
		System.out.println("Floor Key");
		System.out.println(h.floorKey(222)); 
		System.out.println("Floor Entry");
		System.out.println(h.floorEntry(333)); 
		System.out.println("Ceiling Key");
		System.out.println(h.ceilingKey(666));
		System.out.println("PoolFirst Entry");

		Map.Entry m1 = h.pollFirstEntry(); 
		System.out.println(m1.getKey()+"---"+m1.getValue());
		Map.Entry m2 = h.pollLastEntry();
		System.out.println(m2.getKey()+"---"+m2.getValue());

		System.out.println(h);

		
		

	}

}
