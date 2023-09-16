FROM nginx:alpine
ADD ./default.conf /etc/nginx/conf.d/default.conf
COPY /app_eco_swap /var/www/app
EXPOSE 80 443
ENTRYPOINT ["nginx", "-g", "daemon off;"]


