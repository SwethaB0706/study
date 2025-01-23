package com.indium;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StockConsumer {

    @KafkaListener(topics = "stock-topic")
    public void processStockPrice(ConsumerRecord<String, Double> consumerRecord) {
        System.out.println("****** Received message *****");
        System.out.println("***** Partition no: " + consumerRecord.partition() + " Offset: " + consumerRecord.offset() + " *****");
        System.out.println("==== Stock: " + consumerRecord.key() + " Price: " + consumerRecord.value());
    }


//    @KafkaListener(topics = "stock-topic", batch = "true")
//    public void processStockPrice(ConsumerRecords<String, Double> consumerRecords) {
//        System.out.println("***** Received records: (%s) *****".formatted(consumerRecords.count()));
//        consumerRecords.forEach(record -> {
//            System.out.println("==== Stock: " + record.key() + " Price: " + record.value());
//        });
//    }
}
