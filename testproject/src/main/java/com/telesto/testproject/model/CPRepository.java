package com.telesto.testproject.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CPRepository extends CrudRepository<ChatParticipant, Long> {

	List<ChatParticipant> findByEid(Long eid);
	List<ChatParticipant> findByRid(Long rid);
}
