package com.telesto.testproject;

import java.time.LocalTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.telesto.testproject.model.CPRepository;
import com.telesto.testproject.model.Chat;
import com.telesto.testproject.model.ChatParticipant;
import com.telesto.testproject.model.ChatRepository;
import com.telesto.testproject.model.Employee;
import com.telesto.testproject.model.EmployeeRepository;
import com.telesto.testproject.model.Message;
import com.telesto.testproject.model.MessageRepository;

@SpringBootApplication
public class TestprojectApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestprojectApplication.class, args);
	}

	@Bean
	CommandLineRunner init(EmployeeRepository empRepo, ChatRepository chatRepo, MessageRepository msgRepo) {
		return args -> {
			Employee emp1 = new Employee("Bob", "Bobson", "Main Street", 5L, 015111111L, "bob@email.com");
			Employee emp2 = new Employee("Alice", "Alicent", "Main Street", 8L, 015111112L, "alice@email.com");
			Chat chat = new Chat();
			Message msg = new Message(chat, emp1, "Hello", "0:00");
			chat.addMessage(msg);
			chat.addUser(emp1);
			emp1.addChat(chat);
			emp1.addMessage(msg);
			empRepo.save(emp1);
			empRepo.save(emp2);
			chatRepo.save(chat);
			msgRepo.save(msg);
			chatRepo.findAll().forEach(System.out::println);
		};
	}
}
