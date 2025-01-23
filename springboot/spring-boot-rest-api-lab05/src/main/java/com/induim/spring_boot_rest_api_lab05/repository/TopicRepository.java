package com.induim.spring_boot_rest_api_lab05.repository;

import com.induim.spring_boot_rest_api_lab05.entity.Topic;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TopicRepository extends CrudRepository<Topic,Integer> {
    Optional<Topic> findByTitle(String title);
    @Query(value = "FROM Topic")
    List<Topic> getAllTopics();

    @Modifying
    @Query(value = "delete from Topic t where t.title = :p1")
    void removeTopicByTitle(@Param("p1") String title);

    @Modifying
    @Query(value = "update Topic t set t.duration = :d where t.title = :p1")
    void updateDurationByTitle(@Param("p1") String title,@Param("d") int duration);

}
