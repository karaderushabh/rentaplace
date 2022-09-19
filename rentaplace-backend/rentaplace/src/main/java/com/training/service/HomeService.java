package com.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.training.model.Home;
import com.training.model.Owner;
import com.training.model.UserTenant;
import com.training.repo.HomeRepo;
import com.training.repo.OwnerRepo;
import com.training.repo.UserRepo;

@Service
public class HomeService {
 
	@Autowired
	HomeRepo hrepo;
	@Autowired
	OwnerRepo orepo;
//	To get all home list
	public List<Home> gethome(){
		return hrepo.findAll();
	}
//	To do post request by owner to add home in list
	public void saveHomebyowner(Home home, int oid) {
		Optional<Owner> o = orepo.findById(oid);
		Owner owner = o.get();
		home.setOwner(owner);
		hrepo.save(home);
	}
	public void saveHome(Home home) {
		hrepo.save(home);
	}

	public void deleteHomebyId(int hid) {
		hrepo.deleteById(hid);
		
	}
	public void deleteprop( Home home) {
		hrepo.delete(home);
	}
	// When owner clicks on reserve then this value becomes 1, and then all homes that are reserved but not confirmed will be shown on owner side by booking entity
	// then when owner clicks on confirm then isconfirm will change to one
	public void updateHomeIsReserved(int hid, int isreserved) {
		Optional<Home> h = hrepo.findById(hid);
		Home home = h.get();
		home.setIsreserved(isreserved);
		hrepo.save(home);
	}
	
	
}
