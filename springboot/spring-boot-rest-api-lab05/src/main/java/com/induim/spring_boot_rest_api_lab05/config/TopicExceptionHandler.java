package com.induim.spring_boot_rest_api_lab05.config;

import com.induim.spring_boot_rest_api_lab05.exception.TopicAlreadyExistsException;
import com.induim.spring_boot_rest_api_lab05.exception.TopicNotFoundException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TopicExceptionHandler {
    @ExceptionHandler(TopicNotFoundException.class)
    public HttpEntity<String> handleTopicNotFoundException(TopicNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(TopicAlreadyExistsException.class)
    public HttpEntity<String> handleAlreadyExistsException(TopicAlreadyExistsException ex) {
        String message = "Topic " + ex.getMessage() + " already exists";
        return new ResponseEntity<>(message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
