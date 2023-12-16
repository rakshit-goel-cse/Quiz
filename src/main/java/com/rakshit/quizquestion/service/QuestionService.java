package com.rakshit.quizquestion.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import com.rakshit.quizquestion.entity.Questions;
import com.rakshit.quizquestion.repository.QuestionRepos;

@Service
public class QuestionService {
	
	@Autowired
	QuestionRepos repo;
	
	
	public Questions getQuizItemById(int id) {
		return repo.findById(id).get();
	}
	public List<Questions> getAllQuizByCategory(String category) {
		return repo.findAllByCategory(category);
	}
	
	public List<Questions> getAllQuiz() {
		
		return repo.findAll();
	}
	
	public List<Questions> getAllQuizByDifficulty(String difficulty) {
		return repo.findAllByDifficulty(difficulty);
	}
	
	public List<String> getAllQuestions() {
		List<String> questions=new ArrayList<String>();
		List<Questions> rawData=getAllQuiz();
		for(Questions i:rawData) {
			questions.add(i.getQuestion());
		}
		return questions;
	}
	public List<String> getAllQuestionByCategory(String category) {
		List<String> questions=new ArrayList<String>();
		List<Questions> rawData=getAllQuizByCategory(category);
		for(Questions i:rawData) {
			questions.add(i.getQuestion());
		}
		return questions;
	}

	public String insertQuestion(@RequestBody Questions ques) {
		System.out.println("debug --- "+ques);
		try {
			repo.save(ques);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "false";
		}
		return "true";
	}

	public boolean deleteQuestionById(int id) {
		try {
			repo.deleteById(id);
			return true;
		}
		catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public List<String> updateQuizById(Questions ques) {
		
		List<String> changes=new ArrayList<String>();
		if(0< ques.getId() ) {
			Questions dbQues=getQuizItemById(ques.getId());
			if(null!=ques.getQuestion() && !ques.getQuestion().isEmpty()) {
				dbQues.setQuestion(ques.getQuestion());
				changes.add("Question");
			}
			if(null!=ques.getAnswerCorrect() && !ques.getAnswerCorrect().isEmpty()) {
				dbQues.setAnswerCorrect(ques.getAnswerCorrect());
				changes.add("Correct Answer");
			}
			if(null!=ques.getAnswer1() && !ques.getAnswer1().isEmpty()) {
				dbQues.setAnswer1(ques.getAnswer1());
				changes.add("Answer1");
			}
			if(null!=ques.getAnswer2() && !ques.getAnswer2().isEmpty()) {
				dbQues.setAnswer2(ques.getAnswer2());
				changes.add("Answer2");
			}
			if(null!=ques.getAnswer3() && !ques.getAnswer3().isEmpty()) {
				dbQues.setAnswer3(ques.getAnswer3());
				changes.add("Answer3");
			}
			if(null!=ques.getDifficulty() && !ques.getDifficulty().isEmpty()) {
				dbQues.setDifficulty(ques.getDifficulty());
				changes.add("Difficulty");
			}
			if(null!=ques.getCategory() && !ques.getCategory().isEmpty()) {
				dbQues.setCategory(ques.getCategory());
				changes.add("Category");
			}
			if(null!=ques.getDescription() && !ques.getDescription().isEmpty()) {
				dbQues.setDescription(ques.getDescription());
				changes.add("Description");
			}
			changes.add(insertQuestion(dbQues));
		}
		else {
			changes.add("Wrong Id");
		}
		return changes;
	}

	

	
	
	

}
