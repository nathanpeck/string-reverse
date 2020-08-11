FROM node:13 AS build
WORKDIR /srv
ADD package.json .
RUN npm install

FROM node:13-slim
WORKDIR /srv
COPY --from=build /srv .
ADD . .
EXPOSE 3000
CMD ["node", "index.js"]