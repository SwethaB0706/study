package com.indium.spring_boot_jpa_relationships_app.repository;

import com.indium.spring_boot_jpa_relationships_app.entity.Car;
import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository<Car, Integer> {
}
