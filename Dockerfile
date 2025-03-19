# Gebruikt een lichtgewicht Node.js image om de app te bouwen
FROM node:18-alpine AS build

WORKDIR /app

# Kopieer package.json en installeer dependencies
COPY package.json package-lock.json ./
RUN npm install

# Kopieer de volledige code
COPY . .

# **Hier voegen we de environment-variabelen toe!**
ARG VITE_AUTH0_DOMAIN
ARG VITE_AUTH0_CLIENT_ID
ARG VITE_AUTH0_AUDIENCE

ENV VITE_AUTH0_DOMAIN=$VITE_AUTH0_DOMAIN
ENV VITE_AUTH0_CLIENT_ID=$VITE_AUTH0_CLIENT_ID
ENV VITE_AUTH0_AUDIENCE=$VITE_AUTH0_AUDIENCE

# **Forceer Vite om de juiste variabelen te gebruiken**
RUN echo "VITE_AUTH0_DOMAIN=$VITE_AUTH0_DOMAIN" > .env
RUN echo "VITE_AUTH0_CLIENT_ID=$VITE_AUTH0_CLIENT_ID" >> .env
RUN echo "VITE_AUTH0_AUDIENCE=$VITE_AUTH0_AUDIENCE" >> .env

# Build de React app met de juiste variabelen
RUN npm run build
