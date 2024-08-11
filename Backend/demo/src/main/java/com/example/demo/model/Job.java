package com.example.demo.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "job_posting")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;
    private String companyName;
    private String salaryRange;
    private String jobType;
    private String benefits;
    private String jobLevel;
    private String postingDate;
    
    public Job(){
        super();
    }
    
    public Job(Long id, String title, String description, String location, String companyName, String salaryRange,
            String jobType, String benefits, String jobLevel, String postingDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.location = location;
        this.companyName = companyName;
        this.salaryRange = salaryRange;
        this.jobType = jobType;
        this.benefits = benefits;
        this.jobLevel = jobLevel;
        this.postingDate = postingDate;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getCompanyName() {
        return companyName;
    }
    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }
    public String getSalaryRange() {
        return salaryRange;
    }
    public void setSalaryRange(String salaryRange) {
        this.salaryRange = salaryRange;
    }
    public String getJobType() {
        return jobType;
    }
    public void setJobType(String jobType) {
        this.jobType = jobType;
    }
    public String getBenefits() {
        return benefits;
    }
    public void setBenefits(String benefits) {
        this.benefits = benefits;
    }
    public String getJobLevel() {
        return jobLevel;
    }
    public void setJobLevel(String jobLevel) {
        this.jobLevel = jobLevel;
    }
    public String getPostingDate() {
        return postingDate;
    }
    public void setPostingDate(String postingDate) {
        this.postingDate = postingDate;
    }
}
