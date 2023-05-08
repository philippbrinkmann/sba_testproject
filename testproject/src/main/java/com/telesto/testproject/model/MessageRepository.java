package com.telesto.testproject.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Long> {

	List<Message> findByEid(Long eid);
	List<Message> findByRid(Long rid);
}
