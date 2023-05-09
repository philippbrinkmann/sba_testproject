package com.telesto.testproject.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Employee {
	
	private String street;
	private Long nr;
	private Long phoneNumber;
	private String email;
	private String lastName;
	private String firstName;
	@Id
	@GeneratedValue
	private Long EID;
	
	public Employee() {
		
	}
	
	public Employee(String f, String l) {
		this.lastName = l;
		this.firstName = f;
	}
	
	public Employee(String f, String l, String str, Long nr, Long phone, String email) {
		this.street = str;
		this.nr = nr;
		this.phoneNumber = phone;
		this.email = email;
		this.lastName = l;
		this.firstName = f;
	}
	
	public void setName(String f, String l) {
		this.firstName = f;
		this.lastName = l;
	}
	
	public void setAdress(String str, Long nr) {
		this.nr = nr;
		this.street = str;
	}
	
	public void setPhoneNumber(Long phone) {
		this.phoneNumber = phone;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getStreet() {
		return this.street;
	}
	
	public Long getNr() {
		return this.nr;
	}
	
	public Long getPhoneNumber() {
		return this.phoneNumber;
	}
	
	public String getEmail() {
		return this.email;
	}
	
	public String getFirstName() {
		return this.firstName;
	}
	
	public String getLastName() {
		return this.lastName;
	}
	
	public Long getEid() {
		return this.EID;
	}
	
	@Override
	public String toString() {
		return "Employee: { eid=" + this.EID + ", firstName=" + this.firstName + ", lastName=" + this.lastName + ", email=" + this.email + ", phoneNumber=" + this.phoneNumber + ", street=" + this.street + ", nr=" + this.nr + "}";
	}
	
}
