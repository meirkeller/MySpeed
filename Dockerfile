FROM node:24-alpine AS build
RUN apk add --no-cache g++ make cmake python3 py3-setuptools

WORKDIR /myspeed

COPY ./client ./client
COPY ./server ./server
COPY ./package.json ./package.json

RUN npm install
RUN cd client && npm install
RUN npm run build
RUN mv /myspeed/client/build /myspeed

FROM node:24-alpine

RUN apk add --no-cache tzdata

ENV NODE_ENV=production
ENV TZ=Etc/UTC

WORKDIR /myspeed

COPY --from=build /myspeed/build /myspeed/build
COPY --from=build /myspeed/server /myspeed/server
COPY --from=build /myspeed/node_modules /myspeed/node_modules
COPY --from=build /myspeed/package.json /myspeed/package.json

VOLUME ["/myspeed/data"]

EXPOSE 5216

CMD ["node", "server"]