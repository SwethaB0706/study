package com.indium.sb_redis.service;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
public class MyService {
    @Cacheable(value = "capitalCache", key = "#country")
    public String getCapitalOf(String country) {
        // Let's assume that we have a database that stores the capital of countries
        // And fetch the capital from the database everytime
        try {
            // Simulating a delay
            System.out.println("Fetching the capital of " + country + " from the database...");
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String capital = switch (country) {
            case "India" -> "New Delhi";
            case "USA" -> "Washington D.C.";
            case "UK" -> "London";
            case "France" -> "Paris";
            case "Germany" -> "Berlin";
            default -> "Not avaliable in the database";
        };
        return capital;
    }

    @CacheEvict(value = "capitalCache", key = "#country")
    public void clearCache(String country) {
        System.out.println("Cache cleared for " + country);
    }
}