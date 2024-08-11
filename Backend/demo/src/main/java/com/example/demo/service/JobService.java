package com.example.demo.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Job;
import com.example.demo.repository.JobRepository;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    public Job addJob(Job job) {
        return jobRepository.save(job);
    }
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }


    public void deleteJob(Long id) {
        jobRepository.deleteById(id);
    }
}