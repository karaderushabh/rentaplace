package com.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.model.Booking;
import com.training.model.Home;
import com.training.model.Owner;
import com.training.model.UserTenant;
import com.training.repo.BookingRepo;
import com.training.repo.HomeRepo;
import com.training.repo.OwnerRepo;
import com.training.repo.UserRepo;

@Service

public class BookingService {

	@Autowired
	BookingRepo brepo;
	@Autowired
	HomeRepo hrepo;
	@Autowired
	OwnerRepo orepo;
	
	@Autowired
	UserRepo urepo;
	
	
//this will run when user clicks on reserve button	
	public void addinbookinglist(Booking booking, int hid, int uid) {
	
		Optional<Home> h= hrepo.findById(hid);
		Home home = h.get();
		booking.setHome(home);
		Optional<UserTenant> u= urepo.findById(uid);
		UserTenant user = u.get();
		booking.setUser(user);
		brepo.save(booking);
		
	}
	
	public List<Booking> getbookinglist() {
		return brepo.findAll();
		}
	
//	this will run when owner clicks on confirm button and thus confirm will change from 0 to 1
	
	
	public void updateIsConfirm(int bookingid, int isconfirmbyowner) {
		Optional<Booking> b = brepo.findById(bookingid);
		Booking book = b.get();
		book.setIsconfirmbyowner(isconfirmbyowner);
		brepo.save(book);
		
	}
	
	public void deletebookingbyId(int bid) {
		brepo.deleteById(bid);
	}
}


