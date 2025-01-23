package com.indium.spring_boot_jpa_relationships_app;

import com.indium.spring_boot_jpa_relationships_app.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootJpaRelationshipsAppApplication implements CommandLineRunner {

	public static void main(String[] args) {

		SpringApplication.run(SpringBootJpaRelationshipsAppApplication.class, args);
	}

	@Autowired
	PersonService personService;

	@Override
	public void run(String... args) throws Exception {
		personService.savePersonWith2Cars();

	}
}
