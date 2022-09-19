package com.training.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.model.EmailModule;

@Repository
public interface EmailRepo extends JpaRepository<EmailModule, Integer>{

}
