package com.example.practice.MultiThreading;


public class ThreadSleep10Seconds {

	public static void main(String[] args) throws InterruptedException {
	
		
		ThreadD b=new ThreadD();
		b.start();
		Thread.sleep(4000);
		synchronized(b) {
			System.out.println("Main Thread calling wait() method");
			b.wait(6000);
			System.out.println("Main Thread got notiication");
			System.out.println(b.total);
		}
	}
}

class ThreadD extends Thread
{
	int total=0;
	public void run() {
		synchronized(this) {
			System.out.println("child Thread starts calculating");
			for(int i=0;i<=100;i++)
			{
				total=total+i;
			}
			System.out.println("Child Thread giving notification call");
			this.notify();
		}
	}
}
