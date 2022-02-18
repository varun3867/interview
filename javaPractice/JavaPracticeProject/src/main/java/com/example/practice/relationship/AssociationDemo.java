package com.example.practice.relationship;

import java.util.List;

/*
 * Assocation is two types
 * 	1.Aggregation 2. Composition
 *  Composition is Week Association where one object can live without other object.
 *  Composition is Strong Association between two objects where 
 *  					one object cannot exist without other object 
 *  
 */
public class AssociationDemo {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}

/*
 * Aggregation : Both objects can exist independently
 * 		Car can exist without a Driver. Driver can exist without a Car. 
 * 		but Driver doesn't forget his Driving capability even he doesn't have a Car.
 * 		This is loose coupling. It contains HAS-A relationship but there is not 
 * 		dependency of life on each other
 */
class Driver{
	
	private Car car;
	
}

class Car{
	
}

/*
 * Football team has multiple football players. 
 * Football player has multiple teams with which they can play
 * Football player can exist without a team and team can exist  without a Football player
 *  as there are list of football players for a team
 */

class Team{
	List<Player> players;
}

class Player{
	
}



/*
 * Composition : Both objects cannot exist independently. 
 * One object cannot exist without owner object.
 * Car has an Engine, but Engine is a part of Car.
 * 	Engine cannot exist without a car. 
 * 	The life of Engine is only till Car is there.
 *  
 */

class Car1{
	private Engine engine;
}

class Engine{
	
}



