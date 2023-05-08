package com.telesto.testproject.model;

import org.springframework.data.repository.CrudRepository;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

	Employee findByFirstName(String firstName);
	Employee findByFirstNameAndLastName(String firstName, String lastName);
}
