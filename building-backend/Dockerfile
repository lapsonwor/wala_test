FROM node:16.14.2-buster AS builder
WORKDIR /app
COPY ./package*.json ./
COPY ./yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
RUN ls /app/dist
EXPOSE 3000
CMD ["yarn", "start:prod"]
