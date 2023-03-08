package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Patient {
	@Id
	private int id;
	private  String username;
	public int age;
	public String moviename;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getMoviename() {
		return moviename;
	}
	public void setMoviename(String moviename) {
		this.moviename = moviename;
	}
	@Override
	public String toString() {
		return "Patient [id=" + id + ", username=" + username + ", age=" + age + ", moviename=" + moviename + "]";
	}
	
	}