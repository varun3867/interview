package com.example.practice.test;
//https://www.hackerrank.com/interview/interview-preparation-kit?h_l=domains&h_r=hrw&utm_source=hrwCandidateFeedback
public class StringRepeat {

	public static void main(String[] args) {
		
		String s = "Welcome to India";
		
		for(int i=0;i<s.length();i++) {
			
			boolean b = checkRepeat(i,s);
			int count = 1 ;
			if(!b) {
				for(int j=i+1;j<s.length();j++) {
					if(Character.toLowerCase(s.charAt(i))==Character.toLowerCase(s.charAt(j)))
						count++;
				}
				System.out.println(s.charAt(i)+" "+count);
			}
			
		}
		

	}
	
	private static boolean checkRepeat(int i,String s) {
		char check = Character.toLowerCase(s.charAt(i));
		for(int p=i-1;p>=0;p--) {
			if(Character.toLowerCase(s.charAt(p))==check)
				return true;
		}
		return false;
	}

}
