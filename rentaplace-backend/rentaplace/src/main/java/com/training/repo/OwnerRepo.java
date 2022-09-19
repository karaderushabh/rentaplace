package com.training.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.training.model.Owner;


@Repository
public interface OwnerRepo extends JpaRepository<Owner, Integer> {

}
