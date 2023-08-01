package com.blogapp.model;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.OffsetDateTime;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@Data
@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;
    @CreationTimestamp
    private OffsetDateTime creationDate;
    private String author;
    private String description;
    private String title;
    private Integer visitorCount;
    private String image;
    @ManyToOne
    @JoinColumn(name = "role_id")
    private User user;
    }