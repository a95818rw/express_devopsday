FROM node:16

ENV NODE_ENV=production
EXPOSE 80

WORKDIR /usr/src/app
COPY . /usr/src/app

ENTRYPOINT ["npm", "start"]