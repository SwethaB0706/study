package com.indium.spring_boot_jpa_app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Optional;

@SpringBootApplication
public class SpringBootJpaAppApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(SpringBootJpaAppApplication.class, args);
	}

	@Autowired
	PersonDao personDao;

	@Override
	public void run(String... args) throws Exception {
//		Person p = new Person();
//		p.setName("swetha");
//		p.setAge(22);
//		personDao.save(p);
//
//		System.out.println("Person with id:" + p.getId() + "inserted");
//
//		personDao.findAll().forEach(System.out::println);

//		Optional<Person> optionalPerson = personDao.findById(2);
//		if(optionalPerson.isPresent()){
//			Person person = optionalPerson.get();
//			person.setAge(100);
//			personDao.save(person);
//		}

		Optional<Person> optionalPerson3 = personDao.findById(4);
		if(optionalPerson3.isPresent()) {
			Person person = optionalPerson3.get();
			personDao.delete(person);
		}
			else{
				System.out.println("person with id 4 not found");
			}

	}
}
