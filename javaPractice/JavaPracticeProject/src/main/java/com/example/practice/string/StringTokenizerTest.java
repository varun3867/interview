package com.example.practice.string;
import java.util.*;

public class StringTokenizerTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String str="hi ratan w r u wt about anushka";
		StringTokenizer st = new StringTokenizer(str);//split the string with by default (space symbol) 
		while (st.hasMoreElements())
		{	
			System.out.println(st.nextElement());
		}

		//used our string to split giver String
		String str1 = "hi,rata,mf,sdfsdf,ara";
		StringTokenizer st1 = new StringTokenizer("hi,rata,mf,sdfsdf,ara",","); 
		while (st1.hasMoreElements())
		{	
			System.out.println(st1.nextElement());
		}
	}

}

