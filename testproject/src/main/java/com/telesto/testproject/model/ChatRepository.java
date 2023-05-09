package com.telesto.testproject.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ChatRepository extends CrudRepository<Chat, Long> {
	
}
