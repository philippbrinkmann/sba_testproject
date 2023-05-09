package com.telesto.testproject.model;

import org.springframework.data.repository.CrudRepository;

public interface ChatRepository extends CrudRepository<Chat, Long> {
  public List<Chat> findByUser(Employee user);
}
