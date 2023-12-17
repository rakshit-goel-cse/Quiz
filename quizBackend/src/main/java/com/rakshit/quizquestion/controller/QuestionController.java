package com.rakshit.quizquestion.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rakshit.quizquestion.entity.Questions;
import com.rakshit.quizquestion.entity.Quiz;
import com.rakshit.quizquestion.service.QuestionService;

import jakarta.persistence.PostUpdate;

@RestController
public class QuestionController {
	
	@Autowired
	QuestionService service;
	
	//Question get
	@RequestMapping(value="/allquestions",method= RequestMethod.GET)
	public List<String> getAllQuestions() {
		return service.getAllQuizQuestions();
	}
	
	@GetMapping("/quiz/questions")
	public List<Quiz> getAllQuizQuestions(@RequestParam String category,@RequestParam int numQ) {
		return service.getAllQuizQuestionByCategory(category,numQ);
	}
	
	
	//quiz get
	@RequestMapping(value="/allquiz",method= RequestMethod.GET)
	public List<Questions> getAllQuiz() {
		return service.getAllQuiz();
	}
	
	@GetMapping("/allquiz/category/{category}")
	public List<Questions> getAllQuizByCategory(@PathVariable String category) {
		return service.getAllQuizByCategory(category);
	}
	
	@GetMapping("/allquiz/difficulty/{difficulty}")
	public List<Questions> getAllQuizByDifficulty(@PathVariable String difficulty) {
		return service.getAllQuizByDifficulty(difficulty);
	}
	
	//adding question
	@PostMapping("/newquestion")
	public String insertQuestion(@RequestBody Questions ques) {
		return service.insertQuestion(ques);
	}
	
	
	//deleting question
	@DeleteMapping("/deletequestion/{id}")
	public boolean deleteQuestionById(@PathVariable int id) {
		return service.deleteQuestionById(id);
	}
	
	//updating quiz item
	@PutMapping("/updatequestion")
	public List<String> updateQuizById(@RequestBody Questions ques) {
		return service.updateQuizById(ques);
	}
}
