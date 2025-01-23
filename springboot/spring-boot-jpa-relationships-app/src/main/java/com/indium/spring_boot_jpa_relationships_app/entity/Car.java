package com.indium.spring_boot_jpa_relationships_app.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cars")
@Data
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String model;
    @Column(name = "car_year")
    private int year;

    @ManyToOne
    @JoinColumn(name = "person_id")
    private Person owner;
}
