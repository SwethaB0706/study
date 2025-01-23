package com.indium.spring_boot_rest_api.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class Lab04Configuration {
    @Bean
    public List<String> operations() {
        return List.of("Sum", "Multiply", "Divide", "Square");
    }
}
