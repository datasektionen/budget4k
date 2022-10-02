FROM node:18
WORKDIR /usr/server/app

COPY ./package.json ./
RUN yarn install

COPY ./ .

EXPOSE 3000

CMD yarn run dev