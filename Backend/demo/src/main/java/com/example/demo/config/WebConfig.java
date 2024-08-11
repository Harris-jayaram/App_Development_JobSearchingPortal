// package com.example.demo.config;

// import org.springframework.boot.web.servlet.MultipartConfigFactory;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// import org.springframework.util.unit.DataSize;

// import jakarta.servlet.MultipartConfigElement;

// @Configuration
// public class WebConfig implements WebMvcConfigurer {

//     @Bean
//     public MultipartConfigElement multipartConfigElement() {
//         MultipartConfigFactory factory = new MultipartConfigFactory();
//         factory.setMaxFileSize(DataSize.ofMegabytes(10)); // Set max file size to 10MB
//         factory.setMaxRequestSize(DataSize.ofMegabytes(10)); // Set max request size to 10MB
//         return factory.createMultipartConfig();
//     }
// }
