package com.rakshit.quizquestion.entity;

import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.random.RandomGenerator;

public class Quiz {

	private int id;
	private String question;
	private String answer1;
	private String answer2;
	private String answer3;
	private String answer4;
	private String difficulty;
	private String category;
	
	public Quiz(int id,String question,List<String> ans ,String difficulty, String category) {
		this.id=id;
		this.question=question;
		//List<String> ans= Arrays.asList(answer1,answer2,answer3,answer4);
		Random rand=new Random();
		this.answer1=ans.get(rand.nextInt(ans.size()));
		ans.remove(ans.indexOf(this.answer1));
		this.answer2=ans.get(rand.nextInt(ans.size()));
		ans.remove(ans.indexOf(this.answer2));
		this.answer3=ans.get(rand.nextInt(ans.size()));
		ans.remove(ans.indexOf(this.answer3));
		this.answer4=ans.get(0);
		this.difficulty=difficulty;
		this.category=category;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer1() {
		return answer1;
	}

	public void setAnswer1(String answer1) {
		this.answer1 = answer1;
	}

	public String getAnswer2() {
		return answer2;
	}

	public void setAnswer2(String answer2) {
		this.answer2 = answer2;
	}

	public String getAnswer3() {
		return answer3;
	}

	public void setAnswer3(String answer3) {
		this.answer3 = answer3;
	}

	public String getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getAnswer4() {
		return answer4;
	}

	public void setAnswer4(String answer4) {
		this.answer4 = answer4;
	}

	
}
