package com.blogapp.service;
import com.blogapp.dto.BlogDto;
import com.blogapp.dto.BlogDtoConverter;
import com.blogapp.dto.CreateBlogRequest;
import com.blogapp.exception.BlogNotFoundException;
import com.blogapp.model.Blog;
import com.blogapp.model.User;
import com.blogapp.repository.BlogRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BlogService {
    private final BlogRepository blogRepository;
    private final BlogDtoConverter blogDtoConverter;

    public BlogService(BlogRepository blogRepository, BlogDtoConverter blogDtoConverter) {
        this.blogRepository = blogRepository;
        this.blogDtoConverter = blogDtoConverter;
    }

    public BlogDto createBlog(CreateBlogRequest blogRequest, User user) {
//        Blog blog = new Blog(null,
//                blogRequest.getCreationDate(), blogRequest.getAuthor(), blogRequest.getDescription(),
//                blogRequest.getTitle(), blogRequest.getVisitorCount(), blogRequest.getImage());
        Blog blog = new Blog();
        blog.setAuthor(blogRequest.getAuthor());
        blog.setCreationDate(blogRequest.getCreationDate());
        blog.setTitle(blogRequest.getTitle());
        blog.setUser(user);
        blog.setVisitorCount(blogRequest.getVisitorCount());
        blog.setImage(blogRequest.getImage());
        blog.setDescription(blogRequest.getDescription());
        return blogDtoConverter.convert(blogRepository.save(blog));
    }

    public List<BlogDto> getAllBlog() {

        return blogDtoConverter.convert(blogRepository.findAll());
    }

//    public BlogDto updateBlog(Long blogId, UpdateBlogRequest updateBlogRequest) {
//        Blog blog = getBlogById(blogId);
//        if (!isExistBlog(blogId)) {
//            throw new BlogNotFoundException("blog  not found");
//        } else {
//            Blog updatedBlog = new Blog(blog.getId(), blog.getCreationDate(), updateBlogRequest.getAuthor(),
//                    updateBlogRequest.getDescription(), updateBlogRequest.getTitle()
//                    , blog.getVisitorCount(), updateBlogRequest.getImage());
//            return blogDtoConverter.convert(blogRepository.save(updatedBlog));
//        }
//    }


    public Blog getBlogById(Long blogId) {
        return blogRepository.findById(blogId).orElseThrow(
                () -> new BlogNotFoundException("blog not found"));
    }

    public boolean isExistBlog(Long blogId) {
        return blogRepository.existsById(blogId);
    }

}
