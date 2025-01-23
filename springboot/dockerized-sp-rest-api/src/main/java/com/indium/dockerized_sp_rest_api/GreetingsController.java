package com.indium.dockerized_sp_rest_api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingsController {

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Indium Software!";
    }

    @GetMapping("/hello/{name}")
    public String greet(@PathVariable String name) {
        return "Hello, " + name + "!";
    }
}
