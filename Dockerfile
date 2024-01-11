# 1. build container
FROM docker-hub-mirror.linecorp.com/node:21-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
#COPY package.json .
# add app
COPY . .

# yarn build 
RUN corepack enable
RUN yarn install
RUN yarn run build


# 2. running container
FROM docker-hub-mirror.linecorp.com/node:21-alpine

WORKDIR /app

RUN npm install -g serve
COPY --from=0 /app/packages/chord-chart-studio/build /app/build

# start app
CMD ["serve", "-s", "build"]
