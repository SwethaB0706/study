# Specify the steps required to run the application

FROM eclipse-temurin:22.0.2_9-jdk

COPY target/dockerized-sp-rest-api-0.0.1.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]