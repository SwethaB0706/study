package com.indium.spring_boot_jpa_relationships_app.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name = "persons")
@Data
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String name;
    @Column
    private int age;

    @OneToMany
    @JoinColumn(name = "person_id")
    private Set<Dog> dogs;

    @OneToOne
    @JoinColumn(name = "aadhar_id")
    private Aadhar aadhar;
}
