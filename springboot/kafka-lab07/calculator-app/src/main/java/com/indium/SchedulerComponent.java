package com.indium;


import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class SchedulerComponent {

    private final KafkaTemplate<String, String> kafkaTemplate;
    private final Random random = new Random();

    public SchedulerComponent(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    @Scheduled(fixedRate = 10000) // Every 10 seconds
    public void increment() {
        int number = random.nextInt(100); // Generate random number between 0 and 99
        String message = String.format("{\"number\": %d, \"key\": \"increment\"}", number);
        kafkaTemplate.send("calculator-topic", message);
    }

    @Scheduled(fixedRate = 15000) // Every 15 seconds
    public void square() {
        int number = random.nextInt(100); // Generate random number between 0 and 99
        String message = String.format("{\"number\": %d, \"key\": \"square\"}", number);
        kafkaTemplate.send("calculator-topic", message);
    }
}

