package com.indium.controller;


import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Square of a number", description = "Endpoints to get the square of a number")
@RestController
public class SquareController {

    @Value("${welcome.message}")
    private String welcomeMessage;

    @GetMapping("/welcome")
    public String getWelcomeMessage() {
        return welcomeMessage;
    }

    @Operation(summary = "Get the square of a number", parameters = {
            @Parameter(name = "number", description = "number", example = "123")
    })
    @ApiResponse(description = "returns the square of the number", responseCode = "200")
    @GetMapping("/square/{number}")
    public int getSquareOfNumber(
            @PathVariable int number) {
        return number * number;
    }

    @Operation(summary = "Get the square root of a number", parameters = {
            @Parameter(name = "number", description = "number", example = "123")
    })
    @GetMapping("/squareroot/{number}")
    public double squareRoot(@PathVariable double number) {
        return Math.sqrt(number);
    }
}