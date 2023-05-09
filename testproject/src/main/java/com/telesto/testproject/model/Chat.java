package com.telesto.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Chat {
  
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long rid;
  private List<Employee> users;
  private List<Message> messages;
  
  public Chat() {
    users = new ArrayList<Employee>();
    messages = new ArrayList<Message>();
  }
  
  public Long getRid() {
    return this.rid;
  }
  
  public List<Employee> getUsers() {
    return this.users;
  }
  
  public List<Message> getMessages() {
    return this.messages;
  }
  
  public void addMessage(Message message) {
    this.messages.add(message);
  }
  
  public void addUser(Employee user) {
    this.users.add(user);
  }
  
  @Override
  public String toString() {
    return "Chat{rid=" this.rid + ", users=" + this.users + ", messages=" + this.messages + "}";
  }
  
}