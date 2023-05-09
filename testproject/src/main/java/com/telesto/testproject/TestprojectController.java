package com.telesto.testproject;

import java.util.List;
import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.telesto.testproject.model.CPRepository;
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
	public EmployeeData getEmployee(@PathVariable Long id) {
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
	    this.repository.merge(data);
	  }
	  //TODO: success response
	}
	
	@GetMapping("/employee/{id}/chat/{id2}")
	public List<Message> getChatMessages(@PathVariable Long id, @PathVariable Long id2) {
		return messageRepo.findByRid(id2);
	}
	
	@GetMapping("/employee/{id}/chats")
	public List<Long> getEmployeeChatEIDs(@PathVariable Long id) {
		/*List<Long> list = new ArrayList<Long>();
		chatRepo.findByEid(id).forEach(cp -> {
			chatRepo.findByRid(cp.getRID()).forEach(cp1 -> {
				if(cp1.getEID() != id)
					list.add(cp1.getEID());
			});
		});*/
		//TODO: Überarbeiten wenn das neue custom Query Repository für die Chats fertig ist.
		return list;
	}
}
