package com.example.practice.gc;

public class GarbageCollectionDemo2 {
	
	public void finalize() {
		System.out.println("object is garbage collected");
	}

	public static void main(String[] args) {
		GarbageCollectionDemo2 s1 = new GarbageCollectionDemo2();
		GarbageCollectionDemo2 s2 = new GarbageCollectionDemo2();
		s1 = null;
		s2 = null;
		System.gc();
		System.out.println("Done!");
	}

}
