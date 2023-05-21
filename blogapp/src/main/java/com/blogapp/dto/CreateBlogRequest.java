package com.blogapp.dto;
import lombok.*;
import java.time.OffsetDateTime;

@Data
public class CreateBlogRequest {
    private OffsetDateTime creationDate;
    private String author;
    private String description;
    private String title;
    private Integer visitorCount;
    private String image;
}
