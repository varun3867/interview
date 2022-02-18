package com.example.practice.map;

import java.util.HashMap;
import java.util.IdentityHashMap;

public class HaspMapVsIdentityHashMap {
	
	public static void main(String[] args) {
		//equals() method to identify duplicate keys. This will do content comparision
		HashMap<Integer,String> h = new HashMap<Integer,String>();
		h.put(new Integer(10),"ratan");
		h.put(new Integer(10),"anu"); 
		System.out.println(h);

		//== operator to identify duplicate keys. This will do reference comparision
		IdentityHashMap<Integer,String> h1 = new IdentityHashMap<Integer,String>();
		h1.put(new Integer(10),"ratan");
		h1.put(new Integer(10),"anu"); 
		System.out.println(h1);
		
	}

}
