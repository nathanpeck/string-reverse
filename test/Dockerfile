FROM node:14.7 AS build
WORKDIR /srv
ADD package.json .
RUN npm install

FROM node:14.7-slim
WORKDIR /srv
COPY --from=build /srv .
ADD . .
EXPOSE 3000
CMD ["npm", "test"]