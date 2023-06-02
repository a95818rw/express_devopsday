FROM node:16
WORKDIR /usr/src/app
EXPOSE 80
COPY . /usr/src/app

ENTRYPOINT ["npm", "start"]