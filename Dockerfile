FROM node:lts-alpine AS deps

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Builder
FROM node:lts-alpine AS builder

WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN yarn build --prod


# Serving application with NGINX
FROM nginx:1.15.8-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --chown=nginx:nginx --from=builder /opt/app/dist/marvel-comics-angular /usr/share/nginx/html
