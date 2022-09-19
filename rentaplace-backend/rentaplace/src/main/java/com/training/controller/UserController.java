package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.model.UserTenant;
import com.training.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class UserController {
	
	@Autowired
	UserService uservice;
	
	@PostMapping("/user")
	public void addUser(@RequestBody UserTenant user) {
		uservice.addUser(user);
	}
	@GetMapping("/user")
	public List<UserTenant> getUser(){
		return uservice.getUser();
		
	}

}
