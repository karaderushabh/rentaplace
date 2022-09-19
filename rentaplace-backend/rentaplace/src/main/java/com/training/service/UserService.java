package com.training.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.training.model.UserTenant;
import com.training.repo.UserRepo;

@Service
public class UserService {
	
	@Autowired
	UserRepo urepo;
	
	public void addUser(UserTenant user) {
		urepo.save(user);
	}
	public List<UserTenant> getUser(){
		return urepo.findAll();
	}


}
