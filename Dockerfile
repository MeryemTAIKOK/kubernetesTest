FROM node:14.15.0
EXPOSE 8080
COPY server.js .
CMD node server.js
