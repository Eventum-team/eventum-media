FROM node:latest
WORKDIR /eventum-media-ms
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
