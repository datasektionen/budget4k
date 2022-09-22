FROM node:18

WORKDIR /backend

COPY package*.json yarn.lock ./

RUN yarn install

COPY . /backend

EXPOSE 3000

CMD ["yarn", "dev"]