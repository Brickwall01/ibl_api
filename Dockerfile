FROM node:12.18.1
ENV NODE_ENV=production
WORKDIR /app
ARG git_hash=0
ENV git_hash=$git_hash

COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .

CMD ["node", "server.js"]