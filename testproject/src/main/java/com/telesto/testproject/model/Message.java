package com.telesto.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Message {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long mid;
	private String txt;
	private String time;
	private Boolean read;
	
	@ManyToOne
	@JoinColumn(name = "chat_id")
	private Chat chat;
	
	@ManyToOne
	@JoinColumn(name = "employee_id")
	private Employee employee;
	
	public Message() {
		
	}
	
	public Message(Chat c, Employee emp, String txt, String t) {
		this.chat = c;
		this.employee = emp;
		this.txt = txt;
		this.time = t;
		this.read = false;
	}
	
	public String getTxt() {
		return this.txt;
	}
	
	public String getTime() {
		return this.time;
	}
	
	public Boolean getRead() {
		return this.read;
	}
	
	public void setRead(Boolean read) {
		this.read = read;
	}
	
	public Chat getChat() {
		return this.chat;
	}
	
	public Employee getEmployee() {
		return this.employee;
	}
	
	@Override
	public String toString() {
		return "Message{mid=" + this.mid + ", txt=" + this.txt + ", time=" + this.time + ", read=" + this.read + "}";
	}
}
