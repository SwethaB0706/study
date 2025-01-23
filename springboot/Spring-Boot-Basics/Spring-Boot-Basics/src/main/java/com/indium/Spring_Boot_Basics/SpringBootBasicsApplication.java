package com.indium.Spring_Boot_Basics;
import com.labs.lab01.Conference;
import com.labs.lab01.SessionPlanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com")

public class SpringBootBasicsApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(SpringBootBasicsApplication.class, args);
	}

	@Autowired
	Door door;

	@Autowired
	Conference conference;

	@Autowired
	SessionPlanner sessionPlanner;

	@Autowired
	Car car;



//
	public void run(String... args) throws  Exception{
//		door.open();
//		door.close();
	//	sessionPlanner.getTopics().forEach(System.out::println);
		System.out.println(car.getModel());


	}
}
