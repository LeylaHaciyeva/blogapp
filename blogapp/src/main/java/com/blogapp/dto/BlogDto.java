package com.blogapp.dto;
import lombok.*;

import java.time.Instant;
import java.time.LocalDate;
import java.time.OffsetDateTime;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Data
public class BlogDto {
    private Long id;
    private OffsetDateTime creationDate;
    private String author;
    private String description;
    private String title;
    private Integer visitorCount;
    private String image;
}
