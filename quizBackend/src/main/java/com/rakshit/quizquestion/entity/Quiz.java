package com.rakshit.quizquestion.entity;

public class Quiz {

	private int id;
	private String question;
	private String answer1;
	private String answer2;
	private String answer3;
	private String difficulty;
	private String category;
	
	public Quiz(int id,String question,String answer1, String answer2, String answer3,
			String difficulty, String category) {
		this.id=id;
		this.question=question;
		this.answer1=answer1;
		this.answer2=answer2;
		this.answer3=answer3;
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

	
}
