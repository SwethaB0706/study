package com.indium.spring_boot_rest_api.controller;

import com.indium.spring_boot_rest_api.MathOperation;
import com.indium.spring_boot_rest_api.service.CalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/calc")
public class CalculatorController {

    @Autowired
    private CalculatorService calculatorService;

    @Autowired
    private List<String> operations;

    @GetMapping("/sum/{num1}/{num2}")
    public int sum(@PathVariable int num1, @PathVariable int num2) {
        return calculatorService.sum(num1, num2);
    }

    @GetMapping("/add/{a}/{b}")
    public Map<String, Integer> add(@PathVariable("a") int num1, @PathVariable("b") int num2) {
        Map<String, Integer> result = new HashMap<>();
        result.put("sum", calculatorService.sum(num1, num2));
        return result;
    }

    @PutMapping("/square/{num}")
    public int square(@PathVariable int num) {
        return calculatorService.square(num);
    }

    @PostMapping("/product")
    public int product(@RequestParam int num1, @RequestParam int num2) {
        return calculatorService.product(num1, num2);
    }

    @PostMapping("/division")
    public double divide(@RequestBody MathOperation mathOperation) {
        return calculatorService.divide(mathOperation.number1(), mathOperation.number2());
    }

    @GetMapping("/operations")
    public List<String> getOperations() {
        return operations;
    }
}


