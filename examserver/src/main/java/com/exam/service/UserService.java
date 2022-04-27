package com.exam.service;

import java.util.Set;


import com.exam.model.User;
import com.exam.model.UserRole;


public interface UserService {
	
//	Creating User
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
//	Get User
	public User getUser(String username);
	
//	Delete user by id
	public void deleteuser(Long userId);
}
