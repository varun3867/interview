package com.example.practice.MultiThreading;




class MyThread extends Thread
{	
	public void run()
	{
		System.out.println("shoutdown hook");
	}
};
class ShutDownHookTest
{	
	public static void main(String[] args)throws InterruptedException
	{	
		MyThread t = new MyThread();
		//creating Runtime class Object by using factory method 
		//Factory method:- one java class method is able to return same class 
		//						object or different class object is called factory method.
		Runtime r = Runtime.getRuntime();
		r.addShutdownHook(t); //adding Thread to JVM hook  
		for (int i=0;i<10 ;i++)
		{
			System.out.println("main thread is running"); 
			Thread.sleep(3000);
			System.exit(1);//shutdowns the JVM
		}
	}
};
