package com.example.demo.servicies;

import com.example.demo.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> findAll();

    Optional<User> findById(Integer id);

    void add(User user);

    void update(User user);

    void delete(Integer id);
}
