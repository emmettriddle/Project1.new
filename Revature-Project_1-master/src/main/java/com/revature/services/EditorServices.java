package com.revature.services;

import com.revature.models.Editor;
import com.revature.repositories.EditorRepo;

public class EditorServices {
	private static EditorServices instance;
	private EditorRepo repo = new EditorRepo();
	
	private EditorServices() {}
	
	public static EditorServices getInstance() {
		if (instance == null) instance = new EditorServices();
		return instance;
	}
	
	public Editor addEditor(Editor e) {
		return this.repo.add(e);
	}
	
	public Editor getByUsernameAndPassword(String username, String password) {
		return this.repo.getByUsernameAndPassword(username, password);
	}
}
