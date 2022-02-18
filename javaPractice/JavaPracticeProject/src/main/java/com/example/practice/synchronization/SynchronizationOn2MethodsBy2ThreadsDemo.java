package com.example.practice.synchronization;

class Display2{
	synchronized void displayn() {
		 for(int i=0;i<10;i++)
		 {
			 System.out.print(i);
			 try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			 
		 }
	 }
	synchronized void displayc()
	 {
		 for(int i=65;i<75;i++)
		 {
			 System.out.print((char)i);
			 try {
				Thread.sleep(2000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		 }
	 }
}

class Mythread1 extends Thread
{
	Display2 d;
	Mythread1(Display2 d){
		this.d=d;
	}
	
	public void run() {
		d.displayn();
	}
}
class Mythread2 extends Thread
{
	Display2 d;
	Mythread2(Display2 d){
		this.d=d;
	}
	
	public void run() {
		d.displayc();
	}
}
public class SynchronizationOn2MethodsBy2ThreadsDemo {

	public static void main(String[] args) {
		Display2 d=new Display2();
		Mythread1 t1=new Mythread1(d);
		Mythread2 t2=new Mythread2(d);
		t1.start();
		t2.start();
		
		
	}

}

