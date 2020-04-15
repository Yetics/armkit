# specify the node base image with your desired version node:<version>
FROM node:13

COPY  . /home/node/app
WORKDIR /home/node/app/examples/basic

RUN npm install -g --unsafe-perm=true --allow-root && yarn
RUN ./node_modules/armkit-cli/bin/armkit generate
