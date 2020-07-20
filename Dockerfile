FROM node:10.13.0-alpine

ARG PORT=${PORT}

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run build

CMD [ "npm", "start" ]

EXPOSE ${PORT}