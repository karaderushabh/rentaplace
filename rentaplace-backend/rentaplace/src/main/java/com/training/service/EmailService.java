package com.training.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.model.EmailModule;
import com.training.repo.EmailRepo;

@Service
public class EmailService {

	@Autowired
	EmailRepo erepo;
	
	public void addmails(EmailModule email) {
		erepo.save(email);
	}
	
	public List<EmailModule> getmails() {
	  return	erepo.findAll();
	}
}
