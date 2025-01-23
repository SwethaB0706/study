package com.indium.controller;


import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class KafkaConsumerService {

    @KafkaListener(topics = "calculator-topic", groupId = "calculator-consumer-group")
    public void listen(String message) {
        System.out.println("Received Message: " + message);
        // Here, you can parse the message and compute the result as needed
        // For simplicity, this just prints the raw message
    }
}
