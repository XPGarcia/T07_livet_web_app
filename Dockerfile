FROM node:16.16.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . ./

CMD ["npm", "docker-start"]