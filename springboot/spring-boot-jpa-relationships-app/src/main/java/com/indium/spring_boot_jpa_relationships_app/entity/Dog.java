package com.indium.spring_boot_jpa_relationships_app.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "dogs")
@Data
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String breed;
}
