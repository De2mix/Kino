package com.spring.multikino;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class RezerwacjaController {
	
	@Autowired
	private RezerwacjaService rezerwacjaService;
	
	@GetMapping("/rezerwacje")
	public List<Rezerwacja> getAllRezerwacjas(){
		return rezerwacjaService.getRezerwacjas();
	}
	
	@PostMapping("/addRezerwacja")
	public Rezerwacja addRezerwacja(@RequestBody Rezerwacja rezerwacja) {
		return rezerwacjaService.saveRezerwacja(rezerwacja);
	}
	
	@DeleteMapping("/removeRezerwacja/{id}")
	public void removeRezerwacja(@PathVariable (value = "id") long id){
		rezerwacjaService.removeRezerwacja((int) id);
		
	}

}
