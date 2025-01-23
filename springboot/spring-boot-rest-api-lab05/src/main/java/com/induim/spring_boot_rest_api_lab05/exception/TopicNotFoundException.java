package com.induim.spring_boot_rest_api_lab05.exception;

public class TopicNotFoundException extends RuntimeException {
    public TopicNotFoundException(String title) {
        super(title);
    }
}
