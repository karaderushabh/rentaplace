package com.training.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.model.Home;
import com.training.service.HomeService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class HomeController {

	@Autowired
	HomeService hservice;
	@GetMapping("/home")
	public List<Home> gethome(){
		return hservice.gethome();
	}
//	this will run when owner clicks on add home button
	@PostMapping("/home/{oid}")
    public String addhomebyowner(@RequestBody Home home, @PathVariable int oid) {
		hservice.saveHomebyowner(home, oid);
		return "home added";
	}	
	@PostMapping("/home")
public void addhometoupdatereserved(@RequestBody Home home) {
		hservice.saveHome(home);
	}
	
	@DeleteMapping("/home/{hid}")
	public void deletehome(@PathVariable int hid) {
		hservice.deleteHomebyId(hid);
		
	}

	// When owner clicks on reserve then this value becomes 1, and then all homes that are reserved but not confirmed will be shown on owner side by booking entity
	// then when owner clicks on confirm then isconfirm will change to one
	@PutMapping("/home/{hid}/{isreserved}")
	public void updateHomeIsReserved(@PathVariable int hid, @PathVariable int isreserved  ) {
		  hservice.updateHomeIsReserved(hid, isreserved);
	}
	
}
