package com.induim.spring_boot_rest_api_lab05.exception;

public class TopicAlreadyExistsException extends RuntimeException {
    public TopicAlreadyExistsException(String title) {
        super(title);
    }
}
