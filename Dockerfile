# This file is a template, and might need editing before it works on your project.
FROM node:10.5.0

# WORKDIR /usr/src/app

# ARG NODE_ENV
# ENV NODE_ENV $NODE_ENV
# COPY package.json /usr/src/app/
# RUN npm install && npm cache clean
# COPY . /usr/src/app

# CMD [ "npm", "start" ]

# # replace this with your application's default port
# EXPOSE 8080

MAINTAINER Maycon Rebordão <mayconrebordao1122@gmail.com>
# FROM node:8
RUN mkdir -p /usr/src/app
# Create app directory
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./
COPY . /usr/src/app
# RUN npm i -g yarn
RUN npm i -g yarn
RUN npm i
RUN npm run build 
RUN mkdir -p lib/.well-known/acme-challenge
RUN echo "xs-ozgAmi0yquV95qzlR_1pYe6D_lbeK6USsBgGlHck.yQrOLY_tsex_qfTNsXfWda_txHKrobzRlF2Bo3ZEpUs" > lib/.well-known/acme-challenge/xs-ozgAmi0yquV95qzlR_1pYe6D_lbeK6USsBgGlHck

# RUN chmod 777 /usr/src/app
# RUN chmod 777 /usr/src/app/*
# RUN chmod 777 /usr/src/app/lib -R
# RUN chmod 777 /usr/src/app/lib/* -R
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
# COPY . .
EXPOSE 8080

USER mayconrebordao1122@gmail.com

# ENTRYPOINT ["/api-btm"]
CMD [ "npm", "start" ]