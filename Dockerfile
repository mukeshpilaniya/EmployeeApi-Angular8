From node:12.16.1-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/angular-employee /usr/share/nginx/html