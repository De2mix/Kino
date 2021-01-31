package com.spring.multikino;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	public User getUser(long id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	


}
