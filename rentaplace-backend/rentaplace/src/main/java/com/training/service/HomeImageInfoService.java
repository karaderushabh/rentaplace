package com.training.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.model.HomeImageInfo;
import com.training.repo.HomeImageInfoRepo;

@Service
public class HomeImageInfoService {

	@Autowired
	HomeImageInfoRepo urlrepo;
	
	public void addurl(HomeImageInfo urlinfo) {
		urlrepo.save(urlinfo);
	}
	public List<HomeImageInfo> geturls(){
		return urlrepo.findAll();
	}
}
