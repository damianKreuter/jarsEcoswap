FROM openjdk:22-jdk-bookworm
COPY . /app
EXPOSE 8080
ADD ./ecoswap-users.0.0.2-SNAPSHOT.jar ms-users.jar
ENTRYPOINT ["java", "-jar", "/ms-users.jar"]


