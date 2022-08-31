FROM node:14.20-alpine3.15
WORKDIR /user/src/app
COPY package.json ./
COPY ./ ./
RUN apk add htop
RUN apk add tmux
RUN yarn install
RUN yarn build
CMD yarn start