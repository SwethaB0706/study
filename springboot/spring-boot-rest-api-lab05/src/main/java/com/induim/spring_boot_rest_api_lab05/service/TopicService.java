package com.induim.spring_boot_rest_api_lab05.service;


import com.induim.spring_boot_rest_api_lab05.entity.Topic;
import com.induim.spring_boot_rest_api_lab05.exception.TopicAlreadyExistsException;
import com.induim.spring_boot_rest_api_lab05.exception.TopicNotFoundException;
import com.induim.spring_boot_rest_api_lab05.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class TopicService {

    @Autowired
    TopicRepository topicRepository;

    public boolean addTopic(String title, int duration) {
        //true if succesfully inserted
        //false if insertion fails
        //Do not allow duplicate topics
        if (topicRepository.findByTitle(title).isPresent()) {
            throw new TopicAlreadyExistsException(title);
        }
        Topic t = new Topic();
        t.setTitle(title);
        t.setDuration(duration);
        topicRepository.save(t);
        return true;

    }

    public List<Topic> getAllTopics() {
        return topicRepository.getAllTopics();

    }

    @Transactional
    public boolean removeTopic(String title) {
        Optional<Topic> topic = topicRepository.findByTitle(title);
        //topicRepository.delete(topic);
        topicRepository.removeTopicByTitle(title);
        return true;
    }

    @Transactional
    public boolean updateDuration(String title, int duration)
    {
        topicRepository.updateDurationByTitle(title,duration);
        return true;
    }

//
//    public boolean removeTopic(String title) {
//        //Throw TopicNotFoundException if the topic doesn't exist
//    }
//
//    public boolean updateDuration(String title) {
//        //Throw TopicNotFoundException if the topic doesn't exist
//    }

}

