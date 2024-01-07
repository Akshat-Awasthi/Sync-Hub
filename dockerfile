FROM node

WORKDIR /Sync-Hub

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start", "&", "npx", "nodemon", "server.js"]

