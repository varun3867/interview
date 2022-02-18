package com.example.practice.externalization;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class ExternalizableDemo {
	
	public static void main(String[] args) {
		EmployeeExter e = new EmployeeExter(1,"rajiv",200000.00);
		try(
				ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("C:\\Users\\chinnapapakka.reddy\\Documents\\employee.txt"));
				ObjectInputStream in = new ObjectInputStream(new FileInputStream("C:\\Users\\chinnapapakka.reddy\\Documents\\employee.txt"));
				
				)  {
			//ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("C:\\Users\\chinnapapakka.reddy\\Documents\\employee.txt"));
			out.writeObject(e);
			//out.close();
			System.out.println("writing is done.......\n");
			
			
			//ObjectInputStream in = new ObjectInputStream(new FileInputStream("C:\\Users\\chinnapapakka.reddy\\Documents\\employee.txt"));
			EmployeeExter et = (EmployeeExter)in.readObject();
			System.out.println(et.getId());
			System.out.println(et.getName());
			System.out.println(et.getSalary());
			System.out.println("reading is done.......");
			//in.close();
			
		} catch (IOException e1) {
			e1.printStackTrace();
		} catch (ClassNotFoundException e1) {
			e1.printStackTrace();
		}
		
	}

}
