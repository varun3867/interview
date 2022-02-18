package com.example.practice.gc;



public class GarbageCollectorDemo {  
    int j=12;  
    void add()  
    {  
        j=j+12;  
        System.out.println("J="+j);  
    }  
    public void finalize()  
    {  	j=0;
        System.out.println("Object is garbage collected");  
    }  
    public static void main(String[] args) {  
        new GarbageCollectorDemo().add();  
        System.gc();  
        new GarbageCollectorDemo().add();  
    }  
}  
     
