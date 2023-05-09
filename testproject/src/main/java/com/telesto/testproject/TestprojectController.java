package com.telesto.testproject;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.telesto.testproject.model.CPRepository;
import com.telesto.testproject.model.Chat;
import com.telesto.testproject.model.Chatroom;
import com.telesto.testproject.model.ChatroomRepository;
import com.telesto.testproject.model.ChatParticipant;
import com.telesto.testproject.model.Employee;
import com.telesto.testproject.model.EmployeeRepository;
import com.telesto.testproject.model.Message;
import com.telesto.testproject.model.MessageRepository;
import com.telesto.testproject.model.EmployeeData;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TestprojectController {
	
	EmployeeRepository repository;
	CPRepository chatRepo;
	MessageRepository messageRepo;
	
	public TestprojectController(EmployeeRepository repository, CPRepository chats, MessageRepository msgs) {
		this.repository = repository;
		this.chatRepo = chats;
		this.messageRepo = msgs;
	}
	
	@GetMapping("/employees")
	public List<Employee> getEmployees() {
		return (List<Employee>) repository.findAll();
	}
	
	@GetMapping("/employee/{id}")
	public Employee getEmployee(@PathVariable Long id) {
		System.out.println("Trying to find employee " + id);
		Employee data = repository.findById(id).orElseThrow();
		System.out.println("Found employee: " + data.getFirstName());
		System.out.println(data.toString());
		//TODO: Salaries
		return data;
	}
	
	@PostMapping("/employee/{id}")
	public void updateEmployee(@PathVariable Long id, @RequestBody Employee data) {
	  if(id == data.getEid()) {
	    this.repository.save(data);
	  }
	  //TODO: success response?
	}
	
	@GetMapping("/employee/{id}/chats")
	public List<Chat> getEmployeeChatEIDs(@PathVariable Long id) {
		List<Chat> list = repository.findById(id).get().getChats();
		return list;
	}
}
