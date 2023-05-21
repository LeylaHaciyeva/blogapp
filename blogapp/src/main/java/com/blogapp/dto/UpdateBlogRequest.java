package com.blogapp.dto;

import lombok.Data;

import java.time.OffsetDateTime;
@Data
public class UpdateBlogRequest {
    private String author;
    private String description;
    private String title;
    private String image;
//    private Integer visitorCount;
}
