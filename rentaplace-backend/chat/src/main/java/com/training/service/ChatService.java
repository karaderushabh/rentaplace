package com.training.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.model.Chat;
import com.training.repo.ChatRepo;

@Service
public class ChatService {

	@Autowired
	ChatRepo crepo;
	
	public void addchat(Chat chat) {
		crepo.save(chat);
	}
	public List<Chat> getchat(){
		return crepo.findAll();
		
	}
	
}
