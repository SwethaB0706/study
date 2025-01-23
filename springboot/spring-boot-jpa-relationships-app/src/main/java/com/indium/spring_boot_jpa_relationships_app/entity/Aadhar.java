package com.indium.spring_boot_jpa_relationships_app.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "aadhar")
@Data
public class Aadhar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "aadhar_number")
    private String aadharNumber;
}
