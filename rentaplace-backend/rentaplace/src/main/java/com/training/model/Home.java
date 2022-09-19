package com.training.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="home", schema="app")
public class Home {
	@Id
	@Column
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int hid;
	@Column
	private String propertytype;
	@Column
	private String address;
	@Column
	private String features;
	@Column
	private String rentpricepermonth;
	@Column
	private int isreserved;

	@OneToOne
	@JoinColumn(name="owner_id", referencedColumnName = "oid")
	private Owner owner;

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public String getPropertytype() {
		return propertytype;
	}

	public void setPropertytype(String propertytype) {
		this.propertytype = propertytype;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getFeatures() {
		return features;
	}

	public void setFeatures(String features) {
		this.features = features;
	}

	public String getRentpricepermonth() {
		return rentpricepermonth;
	}

	public void setRentpricepermonth(String rentpricepermonth) {
		this.rentpricepermonth = rentpricepermonth;
	}

	public int getIsreserved() {
		return isreserved;
	}

	public void setIsreserved(int isreserved) {
		this.isreserved = isreserved;
	}

	public Owner getOwner() {
		return owner;
	}

	public void setOwner(Owner owner) {
		this.owner = owner;
	}

    
}
