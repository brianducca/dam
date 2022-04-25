FROM node:16.14.2-alpine

#ENVIRONNEMENT


ENV IONIC_VERSION 5.9.3


RUN mkdir -p /app
WORKDIR /app
# install node modules




# install application
COPY     . /app
RUN      npm install --include=dev
RUN npm i -g @angular/cli
RUN npm i -g @ionic/cli






