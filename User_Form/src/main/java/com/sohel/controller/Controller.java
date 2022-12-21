package com.sohel.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sohel.DAO.User;
import com.sohel.service.UserService;

@RestController
@CrossOrigin("*")
public class Controller {

	@Autowired
	UserService service;
	
	@PostMapping("/register")
	public String register(@RequestBody User user) {
		service.save(user);
		return "You have registered successfully";
	}
	
	@GetMapping("/getallusers")
	public List<User> findAllUsers(){
		return (List<User>)service.findAll();
	}
	
	@GetMapping("/user/{id}")
	public Optional<User> findUserById(@PathVariable int id){
		return service.findById(id);
	}
	
	@PutMapping("update/{id}")
	public User updateUser(@PathVariable("id") int id, @RequestBody User user) {
		user.setId(id);
		return service.save(user);
	}
	
	@DeleteMapping("/delete/{id}")
	public List<User> deleteUser(@PathVariable int id){
		service.delete(service.getReferenceById(id));
		return service.findAll();
	}
}
