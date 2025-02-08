package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.entity.Category;

public interface CategoryRepo extends JpaRepository<Category, Long> {
}
