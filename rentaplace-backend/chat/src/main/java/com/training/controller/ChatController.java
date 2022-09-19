package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.model.Chat;
import com.training.service.ChatService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/chat/api")
@RestController
public class ChatController {
	@Autowired 
	ChatService cservice;
	@PostMapping("/chat")
	public void addchat(@RequestBody Chat chat) {
		cservice.addchat(chat);
	}
	@GetMapping("/chat")
	public List<Chat> getchat(){
		return cservice.getchat();
	}

	
}
