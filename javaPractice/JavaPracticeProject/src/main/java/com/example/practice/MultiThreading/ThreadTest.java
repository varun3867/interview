package com.example.practice.MultiThreading;

public class ThreadTest {
	
	public static void main(String[] args) {
		ThreadG g = new ThreadG();
		ThreadH h = new ThreadH();
		g.start();
		h.start();
		System.out.println("Main Thread End");
	}
}


class ThreadG extends Thread{
	@Override
	public void run() {
		try {
			System.out.println("ThreadG started");
			Thread.sleep(2000);
			System.out.println("ThreadG end");
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}


class ThreadH extends Thread{
	@Override
	public void run() {
		try {
			System.out.println("ThreadH started");
			Thread.sleep(2000);
			System.out.println("ThreadH end");

		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

