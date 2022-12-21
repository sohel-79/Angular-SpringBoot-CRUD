package com.sohel.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sohel.DAO.User;

public interface UserService extends JpaRepository<User, Integer>{
	
}
