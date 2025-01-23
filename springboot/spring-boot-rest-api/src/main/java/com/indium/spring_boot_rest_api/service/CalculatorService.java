package com.indium.spring_boot_rest_api.service;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService {

    public int sum(int num1, int num2) {
        return num1 + num2;
    }

    public int square(int num) {
        return num * num;
    }

    public int product(int num1, int num2) {
        return num1 * num2;
    }

    public double divide(double num1, double num2) {
        return num1 /num2;
    }

}

