FROM node:16.14.2-buster

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3001

CMD ["yarn", "start"]
