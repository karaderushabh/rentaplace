package com.training.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.model.Owner;

import com.training.repo.OwnerRepo;

@Service

public class OwnerService {

	@Autowired
	OwnerRepo orepo;
	public void addOwner(Owner owner) {
		orepo.save(owner);
	}
	public List<Owner> getOwner(){
		return orepo.findAll();
	}
}
