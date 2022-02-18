package com.example.practice.test1;

public class Test {
	
	
	public static void main(String[] args) {
		
		String s = "abcdabcdaabbccddAABBCCDD";
		for(int i=0;i<s.length();i++) {
			boolean b = checkRepeat(i,s);
			int count = 1;
			if(!b) {
				for(int j=i+1;j<s.length();j++) {
					if(Character.toLowerCase(s.charAt(i))==Character.toLowerCase(s.charAt(j))) {
					//if(s.charAt(i)==s.charAt(j)) {
						count++;
					}
				}
				System.out.println(s.charAt(i)+"  "+count);
			}
			
		//	if(checkRepeat)
			
		}
		
	}

	private static boolean checkRepeat(int i, String s) {
		char check = Character.toLowerCase(s.charAt(i));
		for(int p=i-1;p>=0;p--) {
			if(Character.toLowerCase(s.charAt(p))==check)
				return true;	
		}	
		return false;
	}
}
