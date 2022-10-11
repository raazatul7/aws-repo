FROM node:18
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
RUN npm run build
RUN npm install serve -g
CMD ["serve", "-s", "build"]
