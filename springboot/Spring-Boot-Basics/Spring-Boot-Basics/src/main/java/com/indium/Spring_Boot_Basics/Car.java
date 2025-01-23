package com.indium.Spring_Boot_Basics;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class Car {
    @Value("ghj")
    private String model;

    public String getModel()
    {
        return model;
    }
}
