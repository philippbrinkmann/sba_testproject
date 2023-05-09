package com.telesto.testproject.model;

import java.util.List;
import java.util.ArrayList;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class Chat {
  
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Long rid;
  
  @ManyToMany
  @JoinTable(
		  name = "chat_users",
		  joinColumns = @JoinColumn(name = "chat_id"),
		  inverseJoinColumns = @JoinColumn(name = "emp_id"))
  private List<Employee> users;
  
  @OneToMany(mappedBy="chat")
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
	  return "Chat{rid=" + this.rid + ", users=" + this.users + ", messages=" + this.messages + "}";
  }
}