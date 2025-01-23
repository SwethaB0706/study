package com.example.spring_boot_graphql_api.controller;

import com.example.spring_boot_graphql_api.MockMoviesDb;
import com.indium.springbootgraphqlapi.dto.Movie;
import com.indium.springbootgraphqlapi.dto.Rating;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MovieGraphQlController {

    @Autowired
    private MockMoviesDb mockMoviesDb;

    @QueryMapping("movies")
    public List<Movie> getAllMovies() {
        return mockMoviesDb.getMovies();
    }

    @QueryMapping("movie")
    public Movie getMovieDetails(@Argument("title") String title) {
        return mockMoviesDb
                .getMovies()
                .stream()
                .filter(movie -> movie.getTitle().equalsIgnoreCase(title))
                .findFirst()
                .orElse(null);
    }

    @MutationMapping("addMovie")
    public Movie addMovie(@Argument("title") String title, @Argument("year") int year, @Argument("actors") List<String> actors, @Argument("ratings") List<Rating> ratings) {
        mockMoviesDb
                .getMovies()
                .stream()
                .filter(movie -> movie.getTitle().equalsIgnoreCase(title))
                .findAny()
                .ifPresent(movie -> {
                    throw new IllegalArgumentException("Movie with title " + title + " already exists");
                });
        Movie movie = new Movie();
        movie.setId(String.valueOf(mockMoviesDb.getMovies().size() + 1));
        movie.setTitle(title);
        movie.setYear(year);
        movie.setActors(actors);
        movie.setRatings(ratings);
        mockMoviesDb.getMovies().add(movie);
        return movie;
    }

}
