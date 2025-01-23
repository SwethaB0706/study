package com.indium;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RoutingConfiguration {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        // add prefix api/v1/square to the path
        return builder.routes()
                .route("square", r -> r.path("/square/**")
                        .uri("lb://square-api"))
                .route("cube", r -> r.path("/cube/**")
                        .uri("lb://cube-api"))
                .build();
    }
}