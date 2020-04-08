FROM node

COPY ./ /www/app

WORKDIR /www/app

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV production

RUN npm i -g pm2
RUN yarn install && yarn build

CMD ["pm2-runtime", "pm2.json"]

EXPOSE 3000
