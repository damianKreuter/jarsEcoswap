FROM openjdk:22-jdk-bookworm
COPY . /app
EXPOSE 8084
ADD ./ecoswap-transacciones.0.0.2-SNAPSHOT.jar ms-transacciones.jar
ENTRYPOINT ["java", "-jar", "/ms-transacciones.jar"]