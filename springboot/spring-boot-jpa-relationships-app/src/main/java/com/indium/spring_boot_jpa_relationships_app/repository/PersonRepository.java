package com.indium.spring_boot_jpa_relationships_app.repository;


import com.indium.spring_boot_jpa_relationships_app.entity.Person;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<Person,Integer> {
}
