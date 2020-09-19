FROM node:alpine

RUN apk add --update yarn

WORKDIR /app

COPY package*.json .
RUN yarn

COPY . .

RUN yarn build


FROM nginx
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html
