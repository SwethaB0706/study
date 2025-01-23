package com.indium.spring_boot_jpa_app;

import org.springframework.data.repository.CrudRepository;

public interface PersonDao extends CrudRepository<Person, Integer> {
}
