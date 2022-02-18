package com.example.practice.MultiThreading;


public class VolatileDemo {
	  private static volatile int val = 0;
	  
	  public static void main(String[] args) {
	    new readData().start();
	    new writeData().start();
	  }
	  
	  static class readData extends Thread {
	    public void run() {
	      int num = val;
	      while(num < 3) {
	        if(num != val) {
	          System.out.println("New Value: " + val);
	          num = val;
	        }
	      }
	    }
	  }
	  
	  static class writeData extends Thread {
	    public void run() {
	      int num = val;
	      while(val < 3) {
	        System.out.println("Increment value: " + (num+1));
	        val = ++num;
	        try {
	          Thread.sleep(200);
	        }
	        catch(Exception e) {
	          e.printStackTrace();
	        }
	      }
	    }
	  }
	}
