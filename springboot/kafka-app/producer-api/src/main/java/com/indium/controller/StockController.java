package com.indium.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StockController {
    List<String> stockList = List.of("AAPL", "GOOGL", "AMZN", "TSLA", "MSFT", "FB", "NVDA", "INTC", "ADBE", "PYPL");

    @Autowired
    private KafkaTemplate<String, Double> kafkaTemplate;

    @PostMapping("/stocks/stcmp")
    public String getCurrentMarketPrice() {
        stockList.forEach(stock -> {
            double cmp = Math.random() * 1000;
            kafkaTemplate.send("stock-topic", stock, cmp);
        });
        return "Stock prices pushed to Kafka topic successfully";
    }
}
