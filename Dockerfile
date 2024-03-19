FROM node:20.11.1-alpine3.19 as base

WORKDIR /app
COPY . .
RUN npm i && \
	npm run build

FROM nginx:1.25.4-alpine3.18

COPY --from=base /app/dist /usr/share/nginx/html
COPY --from=base /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
