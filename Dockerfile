<<<<<<< HEAD
FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
=======
FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
>>>>>>> 4b897444b443579f23081f318acd40a8199d73d8
CMD ["npm", "start"]