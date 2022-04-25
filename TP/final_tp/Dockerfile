FROM node:16.14.2-alpine

#ENVIRONNEMENT


ENV IONIC_VERSION 5.9.3


RUN mkdir -p /app
WORKDIR /app
# install node modules




# install application
COPY     . /app
RUN      npm install
RUN npm install -g @ionic/cli
RUN npm install -g @angular/cli





