FROM nginx:alpine
ADD ./default.conf /etc/nginx/conf.d/default.conf
COPY /app_eco_swap /var/www/app
EXPOSE 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]


