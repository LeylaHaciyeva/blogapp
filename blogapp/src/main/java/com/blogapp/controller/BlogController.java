package com.blogapp.controller;

import com.blogapp.dto.BlogDto;
import com.blogapp.dto.CreateBlogRequest;
import com.blogapp.model.Blog;
import com.blogapp.service.BlogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.blogapp.dto.UpdateBlogRequest;
@RestController
@RequestMapping("/v1/blog")
public class BlogController {
    private final BlogService blogService;


    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @PostMapping("/create-blog")
    public ResponseEntity<BlogDto> createBlogs(@RequestBody CreateBlogRequest createBlogRequest) {
        return ResponseEntity.ok(blogService.createBlog(createBlogRequest));
    }

    @GetMapping("")
    public ResponseEntity<List<BlogDto>> getAllBlogs() {
        return ResponseEntity.ok(blogService.getAllBlog());
    }

    @GetMapping("/{blogId}")
    public ResponseEntity<Blog> getBlogById(@PathVariable("blogId") Long blogId) {
        return ResponseEntity.ok(blogService.getBlogById(blogId));
    }

    @PutMapping("/update-blog/{blogId}")
    public ResponseEntity<BlogDto> updateBlog(@PathVariable("blogId") Long blogId,@RequestBody UpdateBlogRequest updateBlogRequest) {
        return ResponseEntity.ok(blogService.updateBlog(blogId,updateBlogRequest));
    }
}
