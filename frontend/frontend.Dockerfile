FROM node:18

WORKDIR /frontend

COPY package*.json yarn.lock ./

COPY .yarn/ .yarn/

RUN yarn install

COPY . /frontend

EXPOSE 3000

CMD ["yarn", "dev"]
