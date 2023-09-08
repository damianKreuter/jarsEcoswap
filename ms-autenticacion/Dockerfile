FROM openjdk:22-jdk-bookworm
COPY . /app
EXPOSE 8085
ADD ./ecoswap-autenticacion.0.0.3-SNAPSHOT.jar ms-autenticacion.jar
ENTRYPOINT ["java", "-jar", "/ms-autenticacion.jar"]


