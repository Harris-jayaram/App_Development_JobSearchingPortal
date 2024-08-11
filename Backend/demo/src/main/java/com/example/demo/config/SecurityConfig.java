package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeRequests(auth -> auth
                .requestMatchers("/api/users/register", "/api/users/login", "/api/applications/**", "/api/job/**","/api/news/**","/api/clients/**","/api/contact/**","/api/apply/**").permitAll()  // Allow public access to /api/job/**
                .anyRequest().authenticated());
        return http.build();
    }
}
