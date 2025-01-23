package com.indium.config;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfiguration {

    @Bean
    OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new io.swagger.v3.oas.models.info.Info()
                        .title("Math client API")
                        .version("1.0")
                        .description("Math client API for Indium"));
    }
}