package com.telesto.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class ChatParticipant {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long cpID;
	private Long eid;
	private Long rid;
	
	public ChatParticipant() {
		
	}
	
	public ChatParticipant(Long eid, Long rid) {
		this.eid = eid;
		this.rid = rid;
	}
	
	public Long getID() {
		return this.cpID;
	}
	
	public Long getEID() {
		return this.eid;
	}
	
	public Long getRID() {
		return this.rid;
	}
	
	@Override
	public String toString() {
		return "ChatParticipant{cpid=" + this.cpID + ", eid=" + this.eid + ", rid=" + this.rid + "}";
	}
}
