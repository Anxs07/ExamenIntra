package com.cal.intra.controller;

import com.cal.intra.model.UserGuess;
import com.cal.intra.service.UserGuessService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/userGuess")
public class UserGuessController {

    private UserGuessService userGuessService;

    public UserGuessController(UserGuessService userGuessService) {
        this.userGuessService = userGuessService;
    }

    @PostMapping("/save-userGuess")
    public ResponseEntity<UserGuess> saveUserGuess(@RequestBody UserGuess userGuess) {
        return userGuessService.saveUser(userGuess)
                .map(userGuess1 -> ResponseEntity.status(HttpStatus.CREATED).body(userGuess1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/get-all-userGuess")
    public ResponseEntity<List<UserGuess>> getAllOffers(){
        return userGuessService.getAllUserGuess()
                .map(userGuess1 -> ResponseEntity.status(HttpStatus.OK).body(userGuess1))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

}
