package com.eschool.electronic_school.controller;

import com.eschool.electronic_school.domain.User;
import com.eschool.electronic_school.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    @Autowired
    private UserMapper userMapper;

    @GetMapping("/users")
    public List<User> getAll(){
        if(userMapper.findAll().isEmpty()){
            userMapper.add(new User(null, "admin", "admin"));
            userMapper.add(new User(null, "user", "user"));
        }
        return userMapper.findAll();
    }

    @PostMapping("/register")
    public void addUser(@RequestBody User user){
        userMapper.add(user);
    }
}
