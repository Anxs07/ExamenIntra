package com.cal.intra.repository;

import com.cal.intra.model.UserGuess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserGuessRepository extends JpaRepository<UserGuess, Integer> {

}
