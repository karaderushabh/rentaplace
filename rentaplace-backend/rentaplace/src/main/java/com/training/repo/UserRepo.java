package com.training.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.model.UserTenant;

@Repository
public interface UserRepo extends JpaRepository<UserTenant, Integer>{

}
