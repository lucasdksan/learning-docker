FROM node:latest AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS production

WORKDIR /app

COPY --from=builder /app/dist/angular /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD [ "nginx-debug", "-g", "daemon off;" ]  