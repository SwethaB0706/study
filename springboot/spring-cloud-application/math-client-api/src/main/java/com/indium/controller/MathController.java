package com.indium.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.client.circuitbreaker.CircuitBreakerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
@Tag(name = "math clinet of a number", description = "Endpoints to get the square of a number")
@RestController
@RequestMapping("/api/v1/math")
public class MathController {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${square-api.url}")
    private String squareApiUrl;

    @Value("${cube-api.url}")
    private String cubeApiUrl;


    @Operation(summary = "Get the cube of a number", parameters = {
            @Parameter(name = "number", description = "number", example = "123")
    })
    @ApiResponse(description = "returns the cube of the number", responseCode = "200")
    @GetMapping("/cube/{number}")
    public String getCubeOfNumber(@PathVariable int number) {
        int cube = restTemplate.getForObject(cubeApiUrl + "/" + number, Integer.class);
        return "Cube of " + number + " is " + cube;

    }

    @Operation(summary = "Get the square of a number", parameters = {
            @Parameter(name = "number", description = "number", example = "123")
    })
    @ApiResponse(description = "returns the square of the number", responseCode = "200")
    @GetMapping("/square/{number}")
    public String getSquareOfNumber(@PathVariable int number) {
        int square = restTemplate.getForObject(squareApiUrl + "/" + number, Integer.class);
        return "Square of " + number + " is " + square;
    }

}