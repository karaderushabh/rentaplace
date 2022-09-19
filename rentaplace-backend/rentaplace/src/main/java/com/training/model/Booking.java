package com.training.model;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Table(name="booking", schema="app")
public class Booking {
	
	@Id
	@Column
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int bookingid;
	@Column
	private String checkin;
	@Column
	private String checkout;
	//below value will change from 0 to 1 when owner clicks on confirm
	@Column
	private int isconfirmbyowner;
	@OneToOne
	@JoinColumn(name="user_id", referencedColumnName = "uid")
	private UserTenant user;

	public int getIsconfirmbyowner() {
		return isconfirmbyowner;
	}
	public void setIsconfirmbyowner(int isconfirmbyowner) {
		this.isconfirmbyowner = isconfirmbyowner;
	}
	@OneToOne
	@JoinColumn(name="home_id", referencedColumnName = "hid")
	private Home home;
	public int getBookingid() {
		return bookingid;
	}
	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}
	public String getCheckin() {
		return checkin;
	}
	public void setCheckin(String checkin) {
		this.checkin = checkin;
	}
	public String getCheckout() {
		return checkout;
	}
	public void setCheckout(String checkout) {
		this.checkout = checkout;
	}
	public UserTenant getUser() {
		return user;
	}
	public void setUser(UserTenant user) {
		this.user = user;
	}

	public Home getHome() {
		return home;
	}
	public void setHome(Home home) {
		this.home = home;
	}

}
