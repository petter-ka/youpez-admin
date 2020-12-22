FROM nginx:latest

COPY ./dist/theme /var/www/landing
COPY ./build/conf /etc/nginx/conf.d

