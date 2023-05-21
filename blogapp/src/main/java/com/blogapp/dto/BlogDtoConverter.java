package com.blogapp.dto;

import com.blogapp.model.Blog;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class BlogDtoConverter {
    public BlogDto convert(Blog from) {
        return new BlogDto(
                from.getCreationDate(),
                from.getAuthor(),
                from.getDescription(), from.getTitle(),
                from.getVisitorCount(), from.getImage()
        );
    }

    public List<BlogDto> convert(List<Blog> fromList) {
        return fromList.stream().map(this::convert).collect(Collectors.toList());
    }
}
