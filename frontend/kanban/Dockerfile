FROM node:12.18.2

COPY ./docker/entrypoint.sh /entrypoint/

RUN ["chmod", "+x", "entrypoint/entrypoint.sh"]

WORKDIR /client/

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN apt-get update && apt-get install -y --no-install-recommends apt-utils 

#RUN npm i -g npm@latest
#RUN mkdir ~/.npm-global
#RUN npm config set prefix '~/.npm-global'
#ENV PATH ~/.npm-global/bin:$PATH

RUN npm install -g @vue/cli@  --ignore-scripts
RUN npm install protobufjs -g --ignore-scripts
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]