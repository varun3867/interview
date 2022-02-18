package com.example.practice.synchronization;


class DisplayA
{
	void wish(String name) 
	{
		;;;;;;;;;;;;;//one lakh lines of code
		synchronized(this) {
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
		
		;;;;;;;;;;;;;;;;;; //one lakh lines of code

	}
}


class MythreadI extends Thread
{	
	DisplayA d;
	String name;
	public MythreadI(DisplayA d,String name) 
	{
		this.d=d;
		this.name=name;
	}
	public void run()
	{
		d.wish(name);
		
	}
}


public class SynchronizedBlockLockOnCurrentObjectDemo {

	public static void main(String[] args) {
		
		DisplayA d=new DisplayA();
		MythreadI t1=new MythreadI(d,"Dhoni");
		MythreadI t2=new MythreadI(d,"YuvRaj");
		t1.start();
		t2.start();
		
		// we started in Dhoni, YuvRaj, Kohli, Raina...
		//we can't expect which thread starts first..... 
		//we can't expect which thread get's second chance 
	}

}
