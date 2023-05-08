package com.telesto.testproject;

import java.time.LocalTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.telesto.testproject.model.CPRepository;
import com.telesto.testproject.model.ChatParticipant;
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
	CommandLineRunner init(EmployeeRepository empRepo, CPRepository cpRepo, MessageRepository msgRepo) {
		return args -> {
			empRepo.save(new Employee("Bob", "Bobson", "Main Street", 5L, 015111111L, "bob@email.com"));
			empRepo.save(new Employee("Alice", "Alicent", "Main Street", 8L, 015111112L, "alice@email.com"));
			cpRepo.save(new ChatParticipant(empRepo.findByFirstNameAndLastName("Bob", "Bobson").getEid(), 1L));
			cpRepo.save(new ChatParticipant(empRepo.findByFirstNameAndLastName("Alice", "Alicent").getEid(), 1L));
			msgRepo.save(new Message(empRepo.findByFirstNameAndLastName("Alice", "Alicent").getEid(), 1L, "Hello", LocalTime.now().toString()));
			msgRepo.save(new Message(empRepo.findByFirstNameAndLastName("Bob", "Bobson").getEid(), 1L, "Hello to you too", LocalTime.now().toString()));
			msgRepo.findAll().forEach(System.out::println);
		};
	}
}
