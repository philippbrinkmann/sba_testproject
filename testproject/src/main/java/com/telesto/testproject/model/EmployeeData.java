package com.telesto.testproject.model;

import java.util.List;
import java.util.ArrayList;

public class EmployeeData {

	private Employee employee;
	private List<Long> chats = new ArrayList<Long>();
	private List<ChatParticipant> partners = new ArrayList<ChatParticipant>();
	private List<Message> messages = new ArrayList<Message>();
	// private Salary[] salaries;
	
	public EmployeeData() {
		
	}
	
	public EmployeeData(Employee employee) {
		this.employee = employee;
	}
	
	public void addPartner(ChatParticipant chat) {
		this.partners.add(chat);
	}
	
	public void addMessage(Message message) {
		this.messages.add(message);
	}
	
	public void addChat(Long id) {
		this.chats.add(id);
	}
	
	public List<Long> getChats() {
		return this.chats;
	}
	
	public List<ChatParticipant> getPartners() {
		return this.partners;
	}
	
	public List<Message> getMessages() {
		return this.messages;
	}
	
	public Employee getEmployee() {
		return this.employee;
	}
	
	@Override
	public String toString() {
		var wrapper = new Object(){ String cs = ""; String ms = ""; String ps = "";};
	    partners.forEach(partner -> {
			wrapper.ps += (partner.toString() + ", ");
		});
	    chats.forEach(chat -> {
			wrapper.cs += (chat.toString() + ", ");
		});
		messages.forEach(msg -> {
			wrapper.ms += (msg.toString() + ", ");
		});
		if(partners.size() > 0)
			wrapper.ps = wrapper.ps.substring(0, wrapper.ps.length() - 3);
		if(messages.size() > 0)
			wrapper.ms = wrapper.ms.substring(0, wrapper.ms.length() - 3);
		if(chats.size() > 0)
			wrapper.cs = wrapper.cs.substring(0, wrapper.cs.length() - 3);
		return "EmployeeData{employee=" + this.employee + ", partners={" + wrapper.ps + "}, messages={" + wrapper.ms + "}, chats={" + wrapper.cs + "}";
	}
}
