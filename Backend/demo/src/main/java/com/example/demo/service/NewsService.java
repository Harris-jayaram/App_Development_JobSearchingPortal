package com.example.demo.service;


import com.example.demo.model.News;
import com.example.demo.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsService {
    
    @Autowired
    private NewsRepository newsRepository;
    
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }
    
    public Optional<News> getNewsById(Long id) {
        return newsRepository.findById(id);
    }
    
    public News addNews(News news) {
        return newsRepository.save(news);
    }
    
    public News updateNews(Long id, News newsDetails) {
        return newsRepository.findById(id).map(news -> {
            news.setTitle(newsDetails.getTitle());
            news.setContent(newsDetails.getContent());
            news.setDate(newsDetails.getDate());
            news.setAuthor(newsDetails.getAuthor());
            news.setCategory(newsDetails.getCategory());
            news.setTags(newsDetails.getTags());
            news.setImage(newsDetails.getImage());
            news.setSource(newsDetails.getSource());
            return newsRepository.save(news);
        }).orElseThrow(() -> new RuntimeException("News not found with id " + id));
    }
    
    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
}