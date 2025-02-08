package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.entity.User;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
