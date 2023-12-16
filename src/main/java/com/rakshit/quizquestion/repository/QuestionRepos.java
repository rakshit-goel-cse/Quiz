package com.rakshit.quizquestion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rakshit.quizquestion.entity.Questions;

public interface QuestionRepos extends JpaRepository<Questions, Integer> {
	
	List<Questions> findAllByCategory(String category);

	List<Questions> findAllByDifficulty(String difficulty);
}
