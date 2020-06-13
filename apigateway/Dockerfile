FROM node:carbon-slim
WORKDIR /eventum-apiGateway

COPY package*.json /eventum-apiGateway/
RUN npm install

COPY . /eventum-apiGateway/
EXPOSE 5000
CMD ["npm", "start"]