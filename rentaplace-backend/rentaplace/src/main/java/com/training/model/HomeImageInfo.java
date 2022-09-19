package com.training.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="homeimageinfo", schema="app")
public class HomeImageInfo {
	@Id
	@Column
	 @GeneratedValue(strategy = GenerationType.AUTO)
	private int urlid;
	@Column
	private String url;
	public int getUrlid() {
		return urlid;
	}
	public void setUrlid(int urlid) {
		this.urlid = urlid;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getPropid() {
		return propid;
	}
	public void setPropid(String propid) {
		this.propid = propid;
	}
	@Column 
	private String propid;
	

}
