package com.example.practice.string;

public class powerCheck {
	
	public static void main(String[] args) {
		
		int value = 2;
		int number = 256;
		if(powerCalculate(value,number))
			System.out.println("Matched");
		else
			System.out.println("Not Matched");
		
	}
	
	static boolean powerCalculate(int value,int number) {
		
		int exp=0;
		for(int i=1,count=0;i<=number;count++,i*=value) {
			if(i==number) {
				System.out.println("exponenet : "+count);
				return true;
			}
		}
		return false;
		
		
	}

}
