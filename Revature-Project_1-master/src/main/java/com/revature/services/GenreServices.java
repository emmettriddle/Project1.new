package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import com.revature.models.Genre;
import com.revature.repositories.GenreRepo;

public class GenreServices {
	private static GenreServices instance;
	private GenreRepo repo = new GenreRepo();
	
	private GenreServices() {}
	
	public static GenreServices getInstance() {
		if (instance == null) instance = new GenreServices();
		return instance;
	}
	
	public List<Genre> getAllList() {
		return new ArrayList<Genre>(this.repo.getAll().values());
	}
	
	public Genre getByName(String name) {
		return this.repo.getByName(name);
	}

	public Genre getGenreForGeneralEditor(Genre g) {
		switch (g.getName()) {
			case "Sci-fi": return this.getByName("Fantasy");
			case "Fantasy": return this.getByName("Horror");
			case "Horror": return this.getByName("Sci-fi");
			default: return g;
		}
	}
}
