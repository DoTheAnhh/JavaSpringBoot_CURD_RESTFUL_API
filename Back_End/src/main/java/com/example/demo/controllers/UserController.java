package com.example.demo.controllers;

import com.example.demo.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.servicies.impl.UserServiceImpl;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserServiceImpl userServiceImpl;

    //Lấy ra tất cả đối tượng có trong list
    @GetMapping("/all")
    public List<User> getAll(){
        return userServiceImpl.findAll();
    }

    //Lấy ra 1 đối tượng theo id
    @GetMapping("/detail/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        Optional<User> userOptional = userServiceImpl.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //Thêm 1 đối tượng
    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        userServiceImpl.add(user);
        return ResponseEntity.ok().body(user);
    }

    //Sửa 1 đối tượng
    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable("id") Integer id) {
        Optional<User> updateUser = userServiceImpl.findById(id);
        if (updateUser.isPresent()) {
            userServiceImpl.update(user);
            return ResponseEntity.ok().body(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //Xóa 1 đối tượng
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Integer id) {
        Optional<User> userOptional = userServiceImpl.findById(id);

        if (userOptional.isPresent()) {
            userServiceImpl.delete(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
