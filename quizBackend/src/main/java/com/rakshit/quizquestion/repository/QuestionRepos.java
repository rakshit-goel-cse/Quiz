package com.rakshit.quizquestion.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.rakshit.quizquestion.entity.Questions;

public interface QuestionRepos extends JpaRepository<Questions, Integer> {
	
	List<Questions> findAllByCategory(String category);

	List<Questions> findAllByDifficulty(String difficulty);
	
	@Query(value="Select * from questions q Where q.category=:category ORDER BY RAND() LIMIT :numQ",nativeQuery = true)
	List<Questions> getQuizQuestions(String category, int numQ);
}
