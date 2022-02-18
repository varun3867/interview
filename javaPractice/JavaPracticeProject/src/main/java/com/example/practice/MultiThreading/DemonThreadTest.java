package com.example.practice.MultiThreading;

/*		
 * 		If a thread is marked as a daemon thread, JVM does not wait to finish the execution of daemon thread 
 * 		once user defined threads are finished then it terminates the program and all associated daemon threads.
 * 
*/
class MyThreadF extends Thread
{	
	void message(String str)
	{	
		try	{ 
			System.out.println("message="+str); 
			Thread.sleep(1000);	
		}
		catch (InterruptedException e)
		{
			e.printStackTrace();	
		}
	}
	public void run()
	{	
		if (Thread.currentThread().isDaemon())
		{	
			while (true)
			{	
				message("print hi ratan");
			}
		}
	}
};
public class DemonThreadTest
{	
	public static void main(String[] args)
	{	
		MyThreadF t = new MyThreadF(); 
		t.setDaemon(true);//setting daemon nature to Thread 
		t.start();
		try{
			Thread.sleep(5000);
		} 
		catch(InterruptedException e){
				e.printStackTrace();
		} 
		System.out.println("main thread completed");
	}
};
