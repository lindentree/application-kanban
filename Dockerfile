FROM node:12.19.0-alpine

WORKDIR /app 

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 3000

RUN npm install -g nodemon

CMD [ "nodemon", "./backend/server.js" ]