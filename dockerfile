FROM mhart/alpine-node

WORKDIR /Sync-Hub

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "sh", "-c", "npm start && nodemon server.js" ]