package com.telesto.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ProjectParticipant {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long ppID;
	private Long eid;
	private Long pid;
	
	public ProjectParticipant() {
		
	}
	
	public ProjectParticipant(Long employee, Long project) {
		this.eid = employee;
		this.pid = project;
	}
	
	public Long getPPID() {
		return this.ppID;
	}
	
	public Long getEmployee() {
		return this.eid;
	}
	
	public Long getProject() {
		return this.pid;
	}
}
