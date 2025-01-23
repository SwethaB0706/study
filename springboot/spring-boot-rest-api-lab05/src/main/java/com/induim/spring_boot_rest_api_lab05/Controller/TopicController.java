package com.induim.spring_boot_rest_api_lab05.Controller;

import com.induim.spring_boot_rest_api_lab05.entity.Topic;
import com.induim.spring_boot_rest_api_lab05.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/topics")
public class TopicController {

    @Autowired
    private TopicService topicService;

    @PostMapping
    public boolean add(@RequestParam String title, @RequestParam int duration) {
        return topicService.addTopic(title, duration);
    }

    @GetMapping
    public List<Topic> getTopics() {
        return topicService.getAllTopics();
    }

    @DeleteMapping("/{title}")
    public boolean deleteTopic(@PathVariable String title){
        return topicService.removeTopic(title);
    }

    @PatchMapping("/{title}/{duration}")
    public boolean updateDuration(@PathVariable String title, @PathVariable int duration) {
        return topicService.updateDuration(title, duration);
    }

}
