FROM node:16.14.2-alpine

#ENVIRONNEMENT


ENV IONIC_VERSION 5.9.3


RUN mkdir -p /app
WORKDIR /app
# install node modules



RUN echo $(npm --version)
# install application
COPY     . /app
RUN      npm install --include=dev
RUN npm i -g @angular/cli
RUN npm i -g @ionic/cli
RUN npm uninstall @angular-devkit/build-angular
RUN npm install --save-dev @angular-devkit/build-angular





