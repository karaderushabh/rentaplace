package com.training.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.model.HomeImageInfo;

@Repository

public interface HomeImageInfoRepo extends JpaRepository<HomeImageInfo,Integer>{

	
}
