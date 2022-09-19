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

import com.training.model.Booking;
import com.training.service.BookingService;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
@RestController
public class BookingController {

	@Autowired 
	BookingService bservice;
	//this will run when user clicks on reserve button	
	@PostMapping("/booking/{hid}/{uid}")
    public String addinbooking(@RequestBody Booking booking, @PathVariable int hid,  @PathVariable int uid) {
		bservice.addinbookinglist(booking, hid, uid);
		return "booked";
	}	
	
	@GetMapping("/booking")
	public List<Booking> getbookings(){
		return bservice.getbookinglist();
	}
	//when owner clicks on confirm then isconfirm will change to one
	@PutMapping("/booking/{bookingid}/{isconfirmbyowner}")
	public void updateisconfirmed(@PathVariable int bookingid, @PathVariable int isconfirmbyowner  ) {
		bservice.updateIsConfirm(bookingid, isconfirmbyowner);
	}
	@DeleteMapping("/booking/{bid}")
	public void deletebooking(@PathVariable int bid) {
		bservice.deletebookingbyId(bid);
	}
}
