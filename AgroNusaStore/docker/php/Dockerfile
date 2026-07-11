FROM php:8.3-cli-alpine

WORKDIR /var/www/html

RUN apk add --no-cache git unzip icu-dev oniguruma-dev mysql-client \
    && docker-php-ext-install pdo pdo_mysql intl mbstring

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
COPY . .

RUN if [ -f composer.json ]; then composer install --no-interaction --prefer-dist; fi

EXPOSE 8000
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]
