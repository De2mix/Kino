package com.spring.multikino;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RezerwacjaService {

	
	@Autowired
	private RezerwacjaRepository rezerwacjaRepository;
	
	public List<Rezerwacja> getRezerwacjas(){
		return rezerwacjaRepository.findAll();
	}
	
	public Rezerwacja getRezerwacja(long id) {
		return rezerwacjaRepository.findById(id).orElse(null);
	}
	
	
	public Rezerwacja saveRezerwacja(Rezerwacja Rezerwacja) {
		return rezerwacjaRepository.save(Rezerwacja);
	}
	public void removeRezerwacja(int id) {
		rezerwacjaRepository.deleteById((long)id);
	}

}
