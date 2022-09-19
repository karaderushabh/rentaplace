package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.model.HomeImageInfo;
import com.training.service.HomeImageInfoService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class HomeImageInfoController {

	@Autowired
	HomeImageInfoService urlservice;
	@PostMapping("/addurl")
	public void  addurl(@RequestBody HomeImageInfo urlinfo) {
		urlservice.addurl(urlinfo);
	}
	@GetMapping("/geturl")
	public List<HomeImageInfo> geturl(){
		return urlservice.geturls();
	}
}
