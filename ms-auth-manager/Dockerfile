#FROM openjdk:11.0.5-jre-slim as builder

#COPY . /app
#WORKDIR /app
#RUN ./gradlew clean build --info --stacktrace
#RUN ./gradlew clean build -x test --info --stacktrace --no-daemon

#FROM 356317836475.dkr.ecr.us-east-1.amazonaws.com/openjdk:11.0.5-jre-slim


FROM openjdk:22-jdk-bookworm
#FROM openjdk:17-oracle
#as builder
COPY . /app
EXPOSE 8080
ADD ./ms-portal-v1-0.0.3-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]


