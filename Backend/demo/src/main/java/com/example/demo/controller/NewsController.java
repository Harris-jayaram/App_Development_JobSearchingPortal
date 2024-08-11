package com.example.demo.controller;


import com.example.demo.model.News;
import com.example.demo.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "http://localhost:3000") // Adjust based on your React app's URL
public class NewsController {
    
    @Autowired
    private NewsService newsService;
    
    @GetMapping
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<News> getNewsById(@PathVariable Long id) {
        return newsService.getNewsById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public News createNews(@RequestBody News news) {
        return newsService.addNews(news);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<News> updateNews(@PathVariable Long id, @RequestBody News newsDetails) {
        return ResponseEntity.ok(newsService.updateNews(id, newsDetails));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteNews(@PathVariable Long id) {
        newsService.deleteNews(id);
        return ResponseEntity.noContent().build();
    }
}