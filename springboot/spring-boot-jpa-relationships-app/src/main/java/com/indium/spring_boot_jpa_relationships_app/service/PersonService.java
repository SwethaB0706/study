package com.indium.spring_boot_jpa_relationships_app.service;

import com.indium.spring_boot_jpa_relationships_app.entity.Aadhar;
import com.indium.spring_boot_jpa_relationships_app.entity.Car;
import com.indium.spring_boot_jpa_relationships_app.entity.Dog;
import com.indium.spring_boot_jpa_relationships_app.entity.Person;
import com.indium.spring_boot_jpa_relationships_app.repository.AadharRepository;
import com.indium.spring_boot_jpa_relationships_app.repository.CarRepository;
import com.indium.spring_boot_jpa_relationships_app.repository.DogRepository;
import com.indium.spring_boot_jpa_relationships_app.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;


@Service
public class PersonService {
    @Autowired
    PersonRepository personRepository;

    @Autowired
    CarRepository carRepository;

    @Autowired
    private DogRepository dogRepository;

    @Autowired
    private AadharRepository aadharRepository;

    @Transactional
    public void savePersonWith2Cars(){
        Aadhar aadhar1 = new Aadhar();
        aadhar1.setAadharNumber("4350 3544 5435");
        aadharRepository.save(aadhar1);

        Dog dog1 = new Dog();
        dog1.setBreed("Lab");
        dogRepository.save(dog1);

        Dog dog2 = new Dog();
        dog2.setBreed("Dob");
        dogRepository.save(dog2);

        Person person1 = new Person();
        person1.setName("Sam");
        person1.setAge(40);
        person1.setAadhar(aadhar1);


        Set<Dog> dogs = new HashSet<>();
        dogs.add(dog1);
        dogs.add(dog2);
        person1.setDogs(dogs);

        personRepository.save(person1);

        Car car1 = new Car();
        car1.setModel("BMW");
        car1.setYear(2021);
        car1.setOwner(person1);

        Car car2=new Car();
        car2.setModel("Audi");
        car2.setYear(2023);
        car2.setOwner(person1);

        carRepository.saveAll(Arrays.asList(car1, car2));
    }
}
