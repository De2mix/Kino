package com.spring.multikino;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Rezerwacja {

	  @Id
	  @GeneratedValue(strategy=GenerationType.AUTO)
	  private long id;
	  
	  private int miejsce;
	  private int usernameID;
	  
	  
	public int getMiejsce() {
		return miejsce;
	}
	public void setMiejsce(int miejsce) {
		this.miejsce = miejsce;
	}
	public int getUsernameID() {
		return usernameID;
	}
	public void setUsernameID(int usernameID) {
		this.usernameID = usernameID;
	}
	  
	  
	
}
