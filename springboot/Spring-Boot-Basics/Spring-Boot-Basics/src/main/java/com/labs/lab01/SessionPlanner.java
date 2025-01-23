package com.labs.lab01;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@ConfigurationProperties(prefix = "session-planner")
public class SessionPlanner {
    private List<Topic> topics;

    public List<Topic> getTopics() {
        return topics;
    }

    public void setTopics(List<Topic> topics) {
        this.topics = topics;
    }
}
