package com.example.practice.map;
/*
 * HashMap insertion order is not preserved as it is based on hashcode
 * LinkedHashSet insertion order is preserved
 * TreeMap insertion order is not preserved as it uses some sorting order
 * 
 * */
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import com.example.practice.model.Employee;

public class HashMapEqualCheck {

	public static void main(String[] args) {
		
		Map<Employee, String> m = new HashMap<>();
		/*
		 * Employee e = new Employee("sanketh"); m.put(e, "active"); m.put(e,
		 * "inactive");
		 */
		/*m.put(new Employee("rajiv"), "active");
		 m.put(new Employee("rajiv"), "active");
		 m.put(new Employee("rajiv"), "active");
		 m.put(new Employee("rajiv"), "active");
		 m.put(new Employee("praveen"), "active");
		 m.put(new Employee("praveen"), "active");
		*/
		 
		 m.put(new Employee(1,"praveen"), "active");
		 m.put(new Employee(2,"praveen"), "active");
		 
		System.out.println(m);
		
		/*
		 *Set<Entry<Employee,String>> entrySet = m.entrySet();
		for (Entry<Employee, String> entry : entrySet) {
			
			Employee key = entry.getKey();
			System.out.println("Key : "+key);
			String value = entry.getValue();
			System.out.println("value : "+value);
			
		}
		 */
	}

}
