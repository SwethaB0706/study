package com.indium.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Cube of a number", description = "Endpoints to get the cube of a number")
@RestController
public class CubeController {
    @Operation(summary = "Get the cube of a number", parameters = {
            @Parameter(name = "number", description = "number", example = "123")
    })
    @ApiResponse(description = "returns the cube of the number", responseCode = "200")
    @GetMapping("/cube/{number}")
    public int getCubeOfNumber(@PathVariable int number) {
        return number * number * number;
    }
}
