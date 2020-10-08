FROM node:lts-alpine

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

WORKDIR /client/

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install
RUN npm install @vue/cli@ -g

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]