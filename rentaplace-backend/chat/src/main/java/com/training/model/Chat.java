package com.training.model;

import java.sql.Date;
import java.time.Instant;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import lombok.Data;

@Entity
@Data
@Table(name="chat", schema="app")
public class Chat {

	@Id
	@Column
    @GeneratedValue(strategy = GenerationType.AUTO)
	private int chatid;
	@Column
	private String message;
	@Column
	private String sendername;
	@Column
	private String recievername;
    	@Column
    	@CreationTimestamp
	  private LocalDateTime createdDate;
}
