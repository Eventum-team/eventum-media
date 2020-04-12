FROM node:10-alpine

RUN mkdir -p /eventum-media-ms

WORKDIR /eventum-media-ms

COPY package*.json ./

RUN npm install

COPY . /eventum-media-ms

EXPOSE 3000

CMD [ “npm”, “start” ]