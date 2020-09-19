FROM node:alpine

RUN apk add --update yarn

WORKDIR /app

COPY package*.json .
RUN yarn

COPY . .

CMD ["yarn", "start"]
