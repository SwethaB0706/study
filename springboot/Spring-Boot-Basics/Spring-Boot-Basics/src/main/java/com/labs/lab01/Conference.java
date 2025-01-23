package com.labs.lab01;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
@ConfigurationProperties(prefix = "sessions")
public class Conference {
    private Map<Integer, List<String>> topics;

    public Map<Integer, List<String>> getTopics() {
        return topics;
    }

    public void setTopics(Map<Integer, List<String>> topics) {
        this.topics = topics;
    }
}
