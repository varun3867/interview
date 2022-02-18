package com.example.practice.methodlocalInnerClasses;

class MethodLocalInnerClass2 {
	void show() {
		for (int i = 0; i < 10; i++) {
			class Inner {
				public void info() {
					System.out.println("method local inner class");
				}
			}
			new Inner().info();
		}
	}

	public static void main(String[] args) {
		new MethodLocalInnerClass2().show();
	}
}
