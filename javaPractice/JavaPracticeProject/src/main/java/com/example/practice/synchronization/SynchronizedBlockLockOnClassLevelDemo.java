package com.example.practice.synchronization;

class DisplayB
{
	void wish(String name) 
	{
		;;;;;;;;;;;;;
		synchronized(Display.class) {
			for(int i=0;i<10;i++)
			{
				System.out.printf("Good morning : ");
				try 
				{
					Thread.sleep(000);
				} 
				catch (InterruptedException e) 
				{
					e.printStackTrace();
				}
				System.out.println(name);
			}
		}
		
		;;;;;;;;;;;;;;;;;;
	}
}


class MythreadJ extends Thread
{	
	Display d;
	String name;
	public MythreadJ(Display d,String name) 
	{
		this.d=d;
		this.name=name;
	}
	public void run()
	{
		d.wish(name);
		
	}
}


public class SynchronizedBlockLockOnClassLevelDemo {

	public static void main(String[] args) {
		
		Display d1=new Display();
		Display d2=new Display();
		MythreadJ t1=new MythreadJ(d1,"Dhoni");
		MythreadJ t2=new MythreadJ(d2,"YuvRaj");
		t1.start();
		t2.start();
		
		// we started in Dhoni, YuvRaj, Kohli, Raina...
		//we can't expect which thread starts first..... 
		//we can't expect which thread get's second chance 
	}

}
