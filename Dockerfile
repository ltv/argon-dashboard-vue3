FROM node:14-alpine AS builder

RUN apk --no-cache add \
  g++ make python git \
  && yarn global add node-gyp \
  && rm -rf /var/cache/apk/*

WORKDIR /builder/

# Cache frontend's package
ADD package.json          .
ADD yarn.lock             .

# Install dependencies
RUN yarn install --immutable --immutable-cache --check-cache

# Cache frontend's src
ADD . .

# Build
ADD prod.env .env

RUN cat .env
RUN yarn build --mode production

# ===== Image =====
# ==================
## frontend Image
FROM nginx:alpine AS frontend
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /builder/dist/ /usr/share/nginx/html