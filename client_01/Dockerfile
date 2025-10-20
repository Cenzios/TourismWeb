FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 6060

CMD ["npm", "run", "preview", "--", "--port", "6060"]
