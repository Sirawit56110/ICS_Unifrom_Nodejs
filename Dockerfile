FROM node:11-alpine as bankend
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
RUN npm run production