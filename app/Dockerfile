FROM node:slim

COPY package.json package-lock.json ./

RUN npm i

COPY src.js .

EXPOSE 3000

CMD ["node", "src.js"]