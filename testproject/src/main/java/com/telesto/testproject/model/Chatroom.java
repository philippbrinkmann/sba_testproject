package com.telesto.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Chatroom {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long roomID;
	
	public Chatroom() {
		
	}
	
	public Long getRoomID() {
		return this.roomID;
	}
}
