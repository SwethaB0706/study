package com.induim.spring_boot_rest_api_lab05.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "topics")
public class Topic {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String title;
    @Column
    private int duration;


    @Override
    public String toString() {
        return "Topic{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", duration=" + duration +
                '}';
    }
}