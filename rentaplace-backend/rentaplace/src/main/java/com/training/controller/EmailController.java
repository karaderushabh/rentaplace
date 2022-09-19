package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.model.EmailModule;
import com.training.service.EmailService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class EmailController {
	
	@Autowired
	EmailService eservice;
	
	@GetMapping("/emails")
	public List<EmailModule> getmails() {
		return eservice.getmails();
	}
//	this will run when user clicks on reserve buttons and also when owner clicks on confirm button
	@PostMapping("/emails")
	public void addmail(@RequestBody EmailModule e) {
		eservice.addmails(e);
	}

}
