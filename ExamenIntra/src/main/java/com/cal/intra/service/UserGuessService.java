package com.cal.intra.service;

import com.cal.intra.model.UserGuess;
import com.cal.intra.repository.UserGuessRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserGuessService {

    private UserGuessRepository userGuessRepository;

    public UserGuessService(UserGuessRepository userGuessRepository) {
        this.userGuessRepository = userGuessRepository;
    }

    public Optional<UserGuess> saveUser(UserGuess userGuess){
        try {
            return Optional.of(userGuessRepository.save(userGuess));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    public Optional<List<UserGuess>> getAllUserGuess() {
        try {
            return Optional.of(userGuessRepository.findAll());
        } catch (Exception e) {
            return Optional.empty();
        }
    }
}
