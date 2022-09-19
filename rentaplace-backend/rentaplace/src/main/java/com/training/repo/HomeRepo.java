package com.training.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.model.Home;

@Repository
public interface HomeRepo extends JpaRepository<Home, Integer>{

}
