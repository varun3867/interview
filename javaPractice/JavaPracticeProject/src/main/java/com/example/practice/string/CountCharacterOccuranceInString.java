package com.example.practice.string;

public class CountCharacterOccuranceInString {
	
	public static void main(String[] args) {
		
		String s="aaa";
		for(int i=0;i<s.length();i++) {
			
			boolean duplicate = checkDuplicate(s, i);
			if(!duplicate)
				printCountChar(s,i);
		}
		
	}
	
	static void printCountChar(String s,int i) {
		int count=0;
		for(int p=0;p<s.length();p++) {
//			if(s.charAt(p) == s.charAt(i))
			if(Character.compare(s.charAt(i), s.charAt(p)) == 0)
				count++;
		}
		System.out.println(s.charAt(i) +" = "+ count);
	}
	
	static boolean checkDuplicate(String s,int i){
		for(int j=i-1;j>=0;j--) {
			int res = Character.compare(s.charAt(i), s.charAt(j));
			if(res == 0)
				return true;
	
			
		}
		return false;
	}

}
