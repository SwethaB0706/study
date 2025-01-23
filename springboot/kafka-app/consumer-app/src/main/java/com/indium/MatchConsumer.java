//package com.indium;
//
//import org.apache.kafka.clients.consumer.ConsumerRecord;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Component;
//
//@Component
//public class MatchConsumer {
//
//    @KafkaListener(topics = {"match-topic"}, groupId = "whatsapp-notification-group")
//    public void sendWhatsAppMessageOfMatchStatus(ConsumerRecord<String, String> matchRecord) {
//        System.out.println("**** RECEIVED ****");
//        System.out.println(matchRecord.key());
//        System.out.println(matchRecord.value());
//    }
//
//}