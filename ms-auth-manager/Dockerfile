FROM openjdk:22-jdk-bookworm
#as builder
COPY . /app
EXPOSE 8080
ADD ./ms-users-v1-0.0.3-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]


