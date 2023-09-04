package com.blogapp.controller;
import com.blogapp.auth.AuthenticationTokenService;
import com.blogapp.dto.BlogDto;
import com.blogapp.dto.CreateBlogRequest;
import com.blogapp.model.Blog;
import com.blogapp.model.User;
import com.blogapp.service.BlogService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.blogapp.dto.UpdateBlogRequest;
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/v1/blog")
public class BlogController {
    private final BlogService blogService;
    private final AuthenticationTokenService authenticationTokenService;
    public BlogController(BlogService blogService, AuthenticationTokenService authenticationTokenService) {
        this.blogService = blogService;
        this.authenticationTokenService = authenticationTokenService;
    }


    @PostMapping("/create-blog")
    public ResponseEntity<HttpStatus> createBlogs(@RequestBody CreateBlogRequest createBlogRequest,
                                               @RequestParam("token") String token
    ) throws Exception {
        System.out.println("test");
        authenticationTokenService.authentication(token);
        User user = authenticationTokenService.getUser(token);
        blogService.createBlog(createBlogRequest,user);
        return new ResponseEntity<>(HttpStatus.CREATED);
//        return ResponseEntity.ok(blogService.createBlog(createBlogRequest));
    }

    @GetMapping("")
    public ResponseEntity<List<BlogDto>> getAllBlogs() {
        return ResponseEntity.ok(blogService.getAllBlog());
    }

    @GetMapping("/{blogId}")
    public ResponseEntity<Blog> getBlogById(@PathVariable("blogId") Long blogId) {
        return ResponseEntity.ok(blogService.getBlogById(blogId));
    }

//    @PutMapping("/update-blog/{blogId}")
//    public ResponseEntity<BlogDto> updateBlog(@PathVariable("blogId") Long blogId,@RequestBody UpdateBlogRequest updateBlogRequest) {
//        return ResponseEntity.ok(blogService.updateBlog(blogId,updateBlogRequest));
//    }
}
