package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.model.Owner;
import com.training.service.OwnerService;
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class OwnerController {
	@Autowired
	OwnerService oservice;
	
	@PostMapping("/owner")
	public void addOwner(@RequestBody Owner owner) {
		oservice.addOwner(owner);
	}
	@GetMapping("/owner")
	public List<Owner> getOwner(){
		return oservice.getOwner();
		
	}
	
}
