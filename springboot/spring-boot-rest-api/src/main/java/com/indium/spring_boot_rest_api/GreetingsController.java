package com.indium.spring_boot_rest_api;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingsController {
    @Value("${welcome.message}")
    private String welcomeMessage;

    @GetMapping("/welcome")
    public String getWelcomeMessage() {
        return welcomeMessage;
    }

    @GetMapping("/hello")
    public  String greet(){
        return "Hello there!";
    }

    @GetMapping("/hi/{name}")
    public String sayHi(@PathVariable("name") String name){
        return "Hi " + name;
    }

    @PostMapping("/bye")
    public String sayBye(@RequestParam("name") String name){
        return "Bye" + name;
    }
}
