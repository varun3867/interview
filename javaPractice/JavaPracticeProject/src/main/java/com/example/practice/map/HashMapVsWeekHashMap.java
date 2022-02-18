package com.example.practice.map;


import java.util.*; 


/*
 * If an object is associated with hashmap that object is not destroyed even
 *  though it does not contains any reference type.
 *  But in case of weakhashmap if the object does not contains reference type 
 *  that object iseligible for garbage collector even though it associated with weakhashmap.

 */
class A
{	
	public String toString()
	{	
			return "A";
	}
	public void finalize()
	{
		System.out.println("object destroyed");
	}
};
class HashMapVsWeekHashMap
{	
	public static void main(String[] args)
	{
		System.out.println("-----------HashMap--------------------");
		HashMap h = new HashMap(); 
		A a= new A();
		h.put(a,"ratan"); 
		System.out.println(h);
		a=null;
		System.gc();
		System.out.println(h);

		System.out.println("---------------WeekhashMap-------------------");
		WeakHashMap h1 = new WeakHashMap();
		A a1= new A(); 
		h1.put(a1,"ratan"); 
		System.out.println(h1);
		a1=null;
		System.gc();
		System.out.println(h1);
	}
}
