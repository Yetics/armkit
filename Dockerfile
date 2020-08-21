# specify the node base image with your desired version node:<version>
FROM node:13

COPY . /app
WORKDIR /app

RUN yarn install
RUN yarn build

RUN cd examples/basic && yarn generate
