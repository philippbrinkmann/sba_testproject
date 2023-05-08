package com.telesto.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Message {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long mid;
	private Long eid;
	private Long rid;
	private String txt;
	private String time;
	private Boolean read;
	
	public Message() {
		
	}
	
	public Message(Long eid, Long rid, String txt, String t) {
		this.eid = eid;
		this.rid = rid;
		this.txt = txt;
		this.time = t;
		this.read = false;
	}
	
	public Long getEid() {
		return this.eid;
	}
	
	public Long getRid() {
		return this.rid;
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
	
	@Override
	public String toString() {
		return "Message{mid='" + this.mid + "', eid='" + this.eid + "', rid='" + this.rid + "', txt='" + this.txt + "', time='" + this.time + "', read='" + this.read + "'}";
	}
}
