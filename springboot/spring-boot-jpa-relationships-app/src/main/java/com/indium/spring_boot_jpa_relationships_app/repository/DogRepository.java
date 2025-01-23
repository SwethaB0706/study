package com.indium.spring_boot_jpa_relationships_app.repository;


import com.indium.spring_boot_jpa_relationships_app.entity.Dog;
import org.springframework.data.repository.CrudRepository;

public interface DogRepository extends CrudRepository<Dog, Integer> {
}
