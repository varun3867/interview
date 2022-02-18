package com.example.practice.MultiThreading;

/*Generated IllegalMonitorStateException
public class SampleThreadIllegalMonitorStateException {

	public static void main(String[] args) throws InterruptedException {
	
		
		ThreadB b=new ThreadB();
		b.start();
		b.wait();//b.join();//Thread.sleep(0,1);//0.0001 sec
		System.out.println(b.total);
		

	}

}

class ThreadB extends Thread
{
	int total=0;
	public void run() {
		synchronized (this) {
			
			for(int i=0;i<=100;i++)
			{
				total=total+i;
			}
			this.notify();
		}
	}
}
*/



public class SampleThreadIllegalMonitorStateException {

	public static void main(String[] args) throws InterruptedException {
	
		
		ThreadB b=new ThreadB();
		b.start();
		synchronized (b) {
			System.out.println("[Main] Thead enters in synchronized block");
			b.wait();//b.join();//Thread.sleep(0,1);//0.0001 sec
			System.out.println(b.total);
			System.out.println("End");
			
		}
		

	}

}

class ThreadB extends Thread
{
	int total=0;
	public void run() {
		synchronized (this) {
			System.out.println("Thead enters in synchronized block");
			for(int i=0;i<=100;i++)
			{
				total=total+i;
			}
			System.out.println("Thread before notify");
			this.notify();
		}
	}
}



