FROM openjdk:22-jdk-bookworm
COPY . /app
EXPOSE 8085
ADD ./ms-auth-manager/ecoswap-autenticacion.0.0.3-SNAPSHOT.jar ms-autenticacion.jar
ENTRYPOINT ["java", "-jar", "/ms-autenticacion.jar"]
EXPOSE 8080
ADD ./ms-users/ecoswap-users.0.0.2-SNAPSHOT.jar ms-users.jar
ENTRYPOINT ["java", "-jar", "/ms-users.jar"]