package com.indium.spring_boot_jpa_relationships_app.repository;
import com.indium.spring_boot_jpa_relationships_app.entity.Aadhar;
import org.springframework.data.repository.CrudRepository;

public interface AadharRepository extends CrudRepository<Aadhar, Integer> {
}