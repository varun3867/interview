package com.example.practice.synchronization;

class Display
{
	synchronized void wish(String name) 
	{
		for(int i=0;i<10;i++)
		{
			System.out.printf("Good morning : ");
			try 
			{
				Thread.sleep(2000);
			} 
			catch (InterruptedException e) 
			{
				e.printStackTrace();
			}
			System.out.println(name);
		}
		
	}
}


class Mythread extends Thread
{
	Display d;
	String name;
	public Mythread(Display d,String name) 
	{
		this.d=d;
		this.name=name;
	}
	public void run()
	{
		d.wish(name);
		
	}
}


public class SynchronizationOn1MethodBy4ThreadsDemo {

	public static void main(String[] args) {
		System.out.println("In Main Thread");
		Display d=new Display();
		Mythread t1=new Mythread(d,"Dhoni");
		Mythread t2=new Mythread(d,"YuvRaj");
		Mythread t3=new Mythread(d,"Kohli");
		Mythread t4=new Mythread(d,"Raina");
		t1.start();
		t2.start();
		t3.start();
		t4.start(); 
		// we started in Dhoni, YuvRaj, Kohli, Raina...
		//we can't expect which thread starts first..... 
		//we can't expect which thread get's second chance 
	}

}
