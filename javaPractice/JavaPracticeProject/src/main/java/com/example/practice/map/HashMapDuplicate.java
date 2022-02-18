package com.example.practice.map;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class HashMapDuplicate {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Map<Integer, String> m = new HashMap<>();
		m.put(1, "ram");
		m.put(1, "syam");
		System.out.println(m);

	}

}
/*
public class SingletonClass {

	private static SingletonClass instance = null;
	public String str;

	private SingletonClass() {

	}

	public static SingletonClass getInstance() {
		if (instance == null) {
			instance = new SingletonClass();
		}
		return instance;

	}
}*/
